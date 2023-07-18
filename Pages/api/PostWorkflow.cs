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
    [Route("/api/workflow/new")]
    public class PostWorkflow : ControllerBase
    {
        private readonly UserManager _userManager;
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        private readonly WorkflowManager _workflowManager;
        private readonly DatabaseManager _databaseManager;
        public PostWorkflow(UserManager userManager, IHttpContextAccessor context, SessionManager sessionManager, WorkflowManager workflowManager, DatabaseManager databaseManager)
        {
            _userManager = userManager;
            _context = context.HttpContext!;
            _sessionManager = sessionManager;
            _workflowManager = workflowManager;
            _databaseManager = databaseManager;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Dictionary<string , object> data )
        {
            SessionModel session = (_context.Items["session"] as SessionModel)!;
            if (!session.IsLoggedIn)
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "auth", "Need Login"));
            var model = new WorkflowModel()
            {
                Id = -1,
                Label = (string)data["Label"],
                Description = (string)data["Description"],
                StewardUser = session.User!,
                DateCreation = DateTimeOffset.UtcNow,
            };

            _workflowManager.Insert(model);
            return Ok();
        }


    }
}
