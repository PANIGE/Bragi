using System.Net;
using Bragi.Extensions;
using Bragi.Managers;
using Bragi.Models.Sessions;
using Bragi.Models.Workflows;
using Bragi.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Bragi.Pages.api
{
    [ApiController]
    [Route("api/workflows/{id}/participants")]
    public class WorkflowParticipants : ControllerBase
    {
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        private readonly DatabaseManager _databaseManager;
        private readonly UserManager _userManager;

        public WorkflowParticipants(DatabaseManager databaseManager, IHttpContextAccessor context,
            SessionManager sessionManager, UserManager userManager)
        {
            _context = context.HttpContext!;
            _sessionManager = sessionManager;
            _databaseManager = databaseManager;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {

            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }

            if (await _databaseManager.FetchOne("SELECT 1 FROM workflows WHERE id = @id",
                    new Dictionary<string, object>() { ["id"] = id }) == null)
            {
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "workflow",
                    "A workflow with this id does not exist."));
            }


            var users = (await _databaseManager.FetchAll<int>(
                    "SELECT id FROM workflow_assignments WHERE workflow_id = @id",
                    new Dictionary<string, object>() { ["id"] = id }))
                .Select(async s => await _userManager.GetUserById(s["id"]))
                .Select(s => s.Result!).ToArray();

            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> Post(int id, [FromForm] int userId, [FromForm] int stepId)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }

            if (await _databaseManager.FetchOne("SELECT 1 FROM workflows WHERE id = @id",
                    new Dictionary<string, object>() { ["id"] = id }) == null)
            {
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "workflow",
                    "A workflow with this id does not exist."));
            }

            if (await _databaseManager.FetchOne(
                    "SELECT 1 FROM workflow_assignments WHERE workflow_id = @id AND user_id = @uid",
                    new Dictionary<string, object>() { ["id"] = id, ["uid"] = userId }) != null)
            {
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "assignments",
                    "This user is already assigned to this workflow."));
            }

            await _databaseManager.Execute(
                "INSERT INTO workflow_assignments (workflow_id, user_id, step_id) VALUES (@id, @uid, @sid)",
                new Dictionary<string, object>() { ["id"] = id, ["uid"] = userId, ["sid"] = stepId });
            return NoContent();
        }

        [HttpDelete]
        [Route("api/workflows/{id}/participants/{userId}")]
        public async Task<IActionResult> Delete(int id, int userId)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }

            if (await _databaseManager.FetchOne("SELECT 1 FROM workflows WHERE id = @id",
                    new Dictionary<string, object>() { ["id"] = id }) == null)
            {
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "workflow",
                    "A workflow with this id does not exist."));
            }

            if (await _databaseManager.FetchOne(
                    "SELECT 1 FROM workflow_assignments WHERE workflow_id = @id AND user_id = @uid",
                    new Dictionary<string, object>() { ["id"] = id, ["uid"] = userId }) == null)
            {
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "assignments",
                    "This user is not assigned to this workflow."));
            }

            await _databaseManager.Execute(
                "DELETE FROM workflow_assignments WHERE workflow_id = @id AND user_id = @uid",
                new Dictionary<string, object>() { ["id"] = id, ["uid"] = userId });
            return NoContent();
        }
    }
}
