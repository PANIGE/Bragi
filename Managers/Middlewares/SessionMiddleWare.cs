using Bragi.Models.Sessions;

namespace Bragi.Managers.Middlewares
{
    public class SessionMiddleWare
    {
        private readonly RequestDelegate _next;
        private readonly SessionManager _manager;

        public SessionMiddleWare(RequestDelegate next, SessionManager manager)
        {
            _next = next;
            _manager = manager;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            SessionModel session = _manager.IdentifyUser(context,true);
            context.Items.Add("session", session);
            await _next(context);
        }

    }
}
