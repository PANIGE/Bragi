using System.Net;
using Bragi.Extensions;
using Bragi.Managers;
using Bragi.Models.Sessions;
using Bragi.Models.Workflows;
using Bragi.Utils;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Bragi.Pages.api
{
    [ApiController]
    [Route("api/workflows")]
    public class Workflows : ControllerBase
    {
        
        private readonly HttpContext _context;
        private readonly WorkflowManager _workflowManager;
        private readonly SessionManager _sessionManager;

        public Workflows(IHttpContextAccessor context,  WorkflowManager workflowManager, SessionManager sessionManager)
        {
            _context = context.HttpContext!;
            _workflowManager = workflowManager;
            _sessionManager = sessionManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }
            WorkflowModel[] workflows = await _workflowManager.GetAllWorkflows();
            return Ok(workflows);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] string label, [FromForm] string description, [FromForm] UserModel stewardUser, [FromForm] UserModel marketingUser)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }
            WorkflowModel model = new WorkflowModel()
            {
                Id = 0,
                Label = label,
                Description = description,
                StewardUser = stewardUser,
                MarketingUser = marketingUser,
                DateCreation = DateTimeOffset.Now,
            };

            _workflowManager.Insert(model);
            return Ok();
        }
    }
}