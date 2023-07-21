using System.Net;
using Bragi.Extensions;
using Bragi.Managers;
using Bragi.Models.Sessions;
using Bragi.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Bragi.Pages.api
{
    [ApiController]
    [Route("api/auth")]
    public class Auth : ControllerBase
    {
        private readonly UserManager _userManager;
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        public Auth(UserManager userManager, IHttpContextAccessor context, SessionManager sessionManager)
        {
            _userManager = userManager;
            _context = context.HttpContext!;
            _sessionManager = sessionManager;
        }

        public class AuthModel
        {
            public string Login { get; set; }
            public string Password { get; set; }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] AuthModel login)
        {

            _context.Items.TryGetValue("session", out object? session);
            if ((session as SessionModel)!.IsLoggedIn)
            {
				return BadRequest(this.GetStatusError(HttpStatusCode.BadRequest, "auth", "You are already logged in"));
			}

            UserModel? user = await _userManager.GetUserByLogin(login.Login, true);
            if (user == null)
            {
				return BadRequest(this.GetStatusError(HttpStatusCode.BadRequest, "auth", "Invalid login or password"));
			}

            if (!user.CheckPassword(login.Password))
            {
				return BadRequest(this.GetStatusError(HttpStatusCode.BadRequest, "auth", "Invalid login or password"));
            }

			SessionModel newSession = _sessionManager.CreateSession(_context, user);

            Dictionary<string, string> data = new Dictionary<string, string>();
            data.Add("token", newSession.SessionId);
            return Ok(data);

        }
    }
}
