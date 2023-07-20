using System.Net;
using Bragi.Extensions;
using Bragi.Managers;
using Bragi.Models.Sessions;
using Bragi.Models.Workflows;
using Bragi.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Bragi.Pages.api
{
    [ApiController]
    [Route("/api/avatars/{id}")]
    public class Avatars : ControllerBase
    {
        private readonly UserManager _userManager;
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        private readonly WorkflowManager _workflowManager;
        private readonly DatabaseManager _databaseManager;
        public Avatars(UserManager userManager, IHttpContextAccessor context, SessionManager sessionManager, WorkflowManager workflowManager, DatabaseManager databaseManager)
        {
            _userManager = userManager;
            _context = context.HttpContext!;
            _sessionManager = sessionManager;
            _workflowManager = workflowManager;
            _databaseManager = databaseManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            if (System.IO.File.Exists($"./Storage/Avatars/{id}.png"))
            {
                return File(await System.IO.File.ReadAllBytesAsync($"./wwwroot/avatars/{id}.png"), "image/png");
            }

            return File(await System.IO.File.ReadAllBytesAsync($"./wwwroot/avatars/-1.png"), "image/png");
        }

        [HttpPost]
        public async Task<IActionResult> Post(int id, [FromBody] IFormFile avatar)
        {
            SessionModel session = (_context.Items["session"] as SessionModel)!;
            if (session.IsLoggedIn && session.User!.Id != id)
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "auth", "You can't change other's avatar"));
            }

            if (avatar.Length <= 0)
            {
                return NoContent();
            }

            if (System.IO.File.Exists("./Storage/Avatars/" + id + ".png"))
            {
                System.IO.File.Delete("./Storage/Avatars/" + id + ".png");
            }

            await using (FileStream stream = System.IO.File.Create("./Storage/Avatars/" + id + ".png"))
            {
                await avatar.CopyToAsync(stream);
            }
            return NoContent();
        }


    }
}
