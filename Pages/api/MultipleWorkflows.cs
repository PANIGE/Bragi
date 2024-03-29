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
    public class MultipleWorkflows : ControllerBase
    {
        
        private readonly HttpContext _context;
        private readonly WorkflowManager _workflowManager;
        private readonly SessionManager _sessionManager;
        private readonly UserManager _userManager;

        public MultipleWorkflows(IHttpContextAccessor context, WorkflowManager workflowManager, SessionManager sessionManager, UserManager userManager)
        {
            _context = context.HttpContext!;
            _workflowManager = workflowManager;
            _sessionManager = sessionManager;
            _userManager = userManager;
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


        public class Form
        {
            public string Label { get; set; }
            public string Description { get; set; }
            public int StewardUser { get; set; }
            public int MarketingUser { get; set; }
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Form form)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }

            var su = await _userManager.GetUserById(form.StewardUser);
            var mu = await _userManager.GetUserById(form.MarketingUser);
            if (mu != null)
            {
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "stewardUser", "stewardUser do not exist"));
            }

            if (su != null)
            {
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "marketingUser", "marketingUser do not exist"));
            }
            WorkflowModel model = new WorkflowModel()
            {
                Id = 0,
                Label = form.Label,
                Description = form.Description,
                StewardUser = su!,
                MarketingUser = mu!,
                DateCreation = DateTimeOffset.Now,
            };

            _workflowManager.Insert(model);
            return Ok();
        }
    }
}