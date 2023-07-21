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
    
    public class Users : ControllerBase
    {
        private readonly UserManager _userManager;
        private readonly HttpContext _context;
        private readonly SessionManager _sessionManager;
        private readonly DatabaseManager _databaseManager;
        public Users(UserManager userManager, IHttpContextAccessor context, SessionManager sessionManager, DatabaseManager databaseManager)
        {
            _userManager = userManager;
            _context = context.HttpContext!;
            _sessionManager = sessionManager;
            _databaseManager = databaseManager;
        }

        [HttpGet]
        [Route("api/user/{id}")]
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


        [HttpGet]
        [Route("api/users")]
        public async Task<IActionResult> GetUsers()
        {
            return Ok(await _userManager.GetAllUsers());
        }


        [HttpGet]
        [Route("/api/user/search")]
        public async Task<IActionResult> Search(string query)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }

            return Ok(await _databaseManager.FetchAll<int>("SELECT id FROM users WHERE login_name LIKE @query OR display_name LIKE @query", new Dictionary<string, object>() { ["query"] = $"%{query}%" }));
        }

        [HttpGet]
        [Route("/api/user/{role}/role")]
        public async Task<IActionResult> GetByRole(int role)
        {
            if (!_sessionManager.CheckSession(_context.Request.Headers["session"].FirstOrDefault() ?? string.Empty))
            {
                return Unauthorized(this.GetStatusError(HttpStatusCode.Unauthorized, "session", "Invalid session"));
            }
            RoleModel? roleResult = await _userManager.GetRoleById(role);
            if (roleResult == null)
            {
                return NotFound();
            }
            IEnumerable<UserModel> ? users = await _userManager.GetAllUserWithRole(roleResult!);

            return Ok(users);
        }
    }
}
