using System.Net;
using Bragi.Extensions;
using Bragi.Managers;
using Bragi.Models.Sessions;
using Bragi.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Bragi.Pages.api
{
    [ApiController]
    [Route("api/user/{id}")]
    public class SingleUser : ControllerBase
    {
        private readonly UserManager _userManager;
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        public SingleUser(UserManager userManager, IHttpContextAccessor context, SessionManager sessionManager)
        {
            _userManager = userManager;
            _context = context.HttpContext!;
            _sessionManager = sessionManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {

                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }
            UserModel? user = await _userManager.GetUserById(id);
            if (user == null)
                return NotFound();
            return Ok(user);
        }
    }
}
