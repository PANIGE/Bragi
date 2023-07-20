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
    public class ConfigApi : ControllerBase
    {
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        private readonly DatabaseManager _databaseManager;
        private readonly UserManager _userManager;
        private readonly WorkflowManager _workflowManager;

        public ConfigApi(DatabaseManager databaseManager, IHttpContextAccessor context,
            SessionManager sessionManager, UserManager userManager, WorkflowManager workflowManager)
        {
            _context = context.HttpContext!;
            _sessionManager = sessionManager;
            _databaseManager = databaseManager;
            _userManager = userManager;
            _workflowManager = workflowManager;
        }

        [HttpGet]
        [Route("/api/config/roles")]
        public async Task<IActionResult> GetRoles()
        {
            return Ok(_userManager.GetAllRoles());
        }

        [HttpGet]
        [Route("/api/config/steps")]
        public async Task<IActionResult> GetSteps()
        {
            return Ok(_workflowManager.GetAllSteps());
        }

        [HttpGet]
        [Route("/api/config/states")]
        public async Task<IActionResult> GetStates()
        {
            return Ok(_workflowManager.GetAllStates());
        }
    }

}
