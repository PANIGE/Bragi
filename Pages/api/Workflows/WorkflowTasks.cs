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
    [Route("api/workflows/{id}/tasks")]
    public class WorkflowTasks : ControllerBase
    {
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        private readonly DatabaseManager _databaseManager;
        private readonly UserManager _userManager;
        private readonly WorkflowManager _workflowManager;

        public WorkflowTasks(DatabaseManager databaseManager, IHttpContextAccessor context,
            SessionManager sessionManager, UserManager userManager, WorkflowManager workflowManager)
        {
            _context = context.HttpContext!;
            _sessionManager = sessionManager;
            _databaseManager = databaseManager;
            _userManager = userManager;
            _workflowManager = workflowManager;
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


            WStepModel[] workflowSteps = await _workflowManager.GetAllSteps();
            List<WTask> tasks = new();
            foreach (WStepModel step in workflowSteps)
            {
                WTask task = new WTask()
                {
                    Step = step,
                    Assignees = (await _databaseManager.FetchAll<int>(
                            "SELECT user_id FROM workflow_assignments WHERE workflow_id = @id AND step_id = @step_id",
                            new Dictionary<string, object>() { ["id"] = id, ["step_id"] = step.Id }))
                        .Select(async s => await _userManager.GetUserById(s["user_id"]))
                        .Select(s => s.Result!).ToArray(),
                };

                WPointer[] pointers = await _workflowManager.GetPointers(id);
                if (pointers.Last().Step.Id <= step.Id)
                {
                    WPointer pointer = pointers.Last(s => s.Step.Id == step.Id);
                    task.State = pointer.State;
                    task.CompletionTime = pointer.Time;
                    task.Comment = pointer.Description;
                }

                tasks.Add(task);
            }

            tasks = tasks.OrderBy(s => s.Step.Id).ToList();
            return Ok(tasks);
        }
    }

}
