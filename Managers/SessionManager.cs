using Bragi.Models;
using Bragi.Utils;
using System.Collections.Generic;
using System.Reflection.Metadata.Ecma335;

namespace Bragi.Managers
{
    public class SessionManager
    {
        private readonly Dictionary <string,SessionModel> _sessions = new ();

        public IReadOnlyDictionary<string, SessionModel> Sessions => _sessions.AsReadOnly();

        public SessionManager()
        {
            Console.WriteLine("session ouverte");
        }

        public SessionModel CreateSession (HttpContext context)
        {
            bool found =false;
            string sessionId = string.Empty;
            SessionModel? session = null;
            while (!found)
            {
                sessionId = StringUtils.RandomString(32);
                if (Sessions.ContainsKey(sessionId))
                    continue;

                session = new SessionModel(sessionId)
                {
                    AddressIp = context.Connection.RemoteIpAddress,
                }; 
                _sessions.Add(sessionId, session);
                found = true;
            }
            return session!;
        }

        public bool CheckSession(string SessionId)
        {
            if(!Sessions.ContainsKey(SessionId))
                return false;
            SessionModel session = Sessions[SessionId];
            if (session.LastActive.AddMinutes(30) >= DateTime.UtcNow)
                return true;
            _sessions.Remove(SessionId);
            return true;
        }

        public SessionModel IdentifyUser(HttpContext context , bool updateSessionTime = false)
        {
            context.Request.Cookies.TryGetValue("session", out string? sessionId);
            SessionModel session;

            if( string.IsNullOrEmpty(sessionId) || !CheckSession(sessionId))
            {
                session=CreateSession(context);
                context.Response.Cookies.Append("session" , session.SessionId);
                    new CookieOptions { Expires = DateTime.UtcNow.AddDays(1) };
                return session;

            }
            session = Sessions[sessionId];
            if (updateSessionTime)
                session.LastActive= DateTime.UtcNow;
            return session;
        }
    }
}

