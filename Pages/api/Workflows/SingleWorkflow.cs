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
    [Route("api/user/{id}")]
    public class SingleWorkflow : ControllerBase
    {
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        private readonly DatabaseManager _databaseManager;
        private readonly WorkflowManager _workflowManager;

        public SingleWorkflow(DatabaseManager databaseManager, IHttpContextAccessor context, SessionManager sessionManager, WorkflowManager workflowManager)
        {
            _context = context.HttpContext!;
            _sessionManager = sessionManager;
            _databaseManager = databaseManager;
            _workflowManager = workflowManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }

            WorkflowModel? workflow = await _workflowManager.GetWorkflowById(id);
            if (workflow == null)
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "workflow", "A workflow with this id does not exist."));

            return Ok(workflow);
        }

        [HttpPut]
        public async Task<IActionResult> Put(int id, [FromForm] string label, [FromForm] string description, 
                                            [FromForm] int? marketingUser, [FromForm] long unixRelease)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }

            if (_databaseManager.FetchOne("SELECT 1 FROM workflows WHERE id = @id", new Dictionary<string, object>() { ["id"] = id }) == null)
            {
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "workflow", "A workflow with this id does not exist."));
            }

            Dictionary<string, object?> parameters = new()
            {
                ["label"] = label,
                ["description"] = description,
                ["marketing"] = marketingUser,
                ["datetime"] = DateTimeOffset.FromUnixTimeSeconds(unixRelease).ToString("G"),
            };

            await _databaseManager.Execute("UPDATE workflows SET label = @label, " +
                                                          "description = @description, " +
                                                          "marketing_user_id = @marketing, " +
                                                          "release_date = @datetime", parameters);
            return NoContent();
        }
    }
}
