using Bragi.Models.Sessions;
using Bragi.Utils;
using System.Collections.Generic;
using System.Reflection.Metadata.Ecma335;
using Microsoft.Extensions.Primitives;

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

        /// <summary>
        /// Create a session only present for the current request, that is made to tell
        /// the rest of the application that the user is not logged in.
        /// </summary>
        /// <returns></returns>
        public SessionModel CreateAnonymousSession()
        {
            SessionModel session = new SessionModel(string.Empty);
            return session;
        }

        public SessionModel CreateSession (HttpContext context, UserModel user)
        {
            bool found =false;
            SessionModel? session = null;
            while (!found)
            {
                string sessionId = StringUtils.RandomString(32);
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

        public bool CheckSession(string sessionId)
        {
            if(!Sessions.ContainsKey(sessionId))
                return false;
            SessionModel session = Sessions[sessionId];
            if (session.LastActive.AddMinutes(30) >= DateTime.UtcNow)
                return true;
            _sessions.Remove(sessionId);
            return true;
        }

        public SessionModel IdentifyUser(HttpContext context , bool updateSessionTime = false)
        {
            context.Request.Headers.TryGetValue("session", out StringValues sessionIds);
            
            if (sessionIds.Count == 0)
                return CreateAnonymousSession();
            
            string sessionId = sessionIds[0]!;
            
            SessionModel session;

            if (string.IsNullOrEmpty(sessionId) || !CheckSession(sessionId))
            {
                session = CreateAnonymousSession();
                return session;

            }
            
            session = Sessions[sessionId];
            
            if (updateSessionTime)
                session.LastActive= DateTime.UtcNow;
            
            return session;
        }
    }
}

