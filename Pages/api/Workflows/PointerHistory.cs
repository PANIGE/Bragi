using System.Net;
using Bragi.Extensions;
using Bragi.Managers;
using Bragi.Models.Sessions;
using Bragi.Models.Workflows;
using Bragi.Models.Workflows.Axes;
using Bragi.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Bragi.Pages.api.Workflows
{
    [ApiController]
    [Route("api/workflows/{id}/history")]
    public class PointerHistory : ControllerBase
    {
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        private readonly DatabaseManager _databaseManager;
        private readonly WorkflowManager _workflowManager;
        private readonly UserManager _userManager;

        public PointerHistory(SessionManager sessionManager, DatabaseManager databaseManager, IHttpContextAccessor context, WorkflowManager workflowManager, UserManager userManager)
        {
            _sessionManager = sessionManager;
            _databaseManager = databaseManager;
            _context = context.HttpContext!;
            _workflowManager = workflowManager;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }
            if (await _databaseManager.FetchOne("SELECT 1 FROM workflows WHERE id = @id", new Dictionary<string, object>() { ["id"] = id }) == null)
            {
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "workflow", "A workflow with this id does not exist."));
            }
            WPointer[] pointers = await _workflowManager.GetPointers(id);
            return Ok(pointers);

        }
        public class Form
        {
            public int StepId { get; set; }

            public int UserId { get; set; }

            public int StateId { get; set; }

            public string Description { get; set; }
        }

        [HttpPost]
        public async Task<IActionResult> Post(int id, [FromBody] Form form)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }

            StateModel? staid = await _workflowManager.GetStateById(form.StateId);
            UserModel? uid = await _userManager.GetUserById(form.UserId);
            WStepModel? steid = await _workflowManager.GetWorkflowStepById(form.StepId);
            if (staid != null)
            {
                return BadRequest(this.GetStatusError(HttpStatusCode.BadRequest, "stateID", "This state does not exist"));
            }
            if (uid != null)
            {
                return BadRequest(this.GetStatusError(HttpStatusCode.BadRequest, "userID", "This user does not exist"));
            }
            if (steid != null)
            {
                return BadRequest(this.GetStatusError(HttpStatusCode.BadRequest, "stepID", "This step does not exist"));
            }

            _workflowManager.InsertPointer(id, uid!, staid!, steid!, form.Description);

            return Ok((await _workflowManager.GetPointers(id)).Last());
        }

    }
}
