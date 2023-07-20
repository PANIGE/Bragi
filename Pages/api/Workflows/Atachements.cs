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
    [Route("api/pointers/{id}/attachements")]
    public class Attachements : ControllerBase
    {
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        private readonly DatabaseManager _databaseManager;
        private readonly WorkflowManager _workflowManager;
        private readonly UserManager _userManager;

        public Attachements(SessionManager sessionManager, DatabaseManager databaseManager, IHttpContextAccessor context, WorkflowManager workflowManager, UserManager userManager)
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

            return Ok(await _databaseManager.FetchAll<int>("SELECT * FROM attachements WHERE pointer_id = @id", new Dictionary<string, object>() { ["id"] = id }));

        }

        [HttpGet]
        [Route("api/attachement/{id}")]
        public async Task<IActionResult> getAttachementData(int id)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }

            var data = await _databaseManager.FetchOne<string>("SELECT filename FROM attachements WHERE id = @id",
                new Dictionary<string, object>() { ["id"] = id });

            if (data == null)
                return NotFound();

            if (!System.IO.File.Exists($"./attachements/{data}"))
                return NotFound();

            return File(System.IO.File.ReadAllBytes($"./attachements/{data}"), "application/octet-stream");
        }

        [HttpPost]
        public async Task<IActionResult> Post(int id, [FromForm] IFormFile file)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }
            WPointer pointer = await _workflowManager.GetPointerById(id);
            if (pointer == null)
                return NotFound(this.GetStatusError(HttpStatusCode.NotFound, "pointer", "pointer not found"));

            string fileName = $"{pointer.Workflow.Label} - {pointer.Step.Label} - {StringUtils.RandomString(8)}{Path.GetExtension(file.FileName)}";

            await System.IO.File.WriteAllBytesAsync($"./attachements/{fileName}", await file.GetBytesAsync());

            await _databaseManager.Execute("INSERT INTO attachements (pointer_id, filename) VALUES (@pointer_id, @filename)",
                new Dictionary<string, object>()
                {
                    ["pointer_id"] = id,
                    ["filename"] = fileName
                });

            return NoContent();
        }

    }
}
