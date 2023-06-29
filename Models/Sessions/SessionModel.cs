using System.Globalization;
using System.Net;

namespace Bragi.Models.Sessions
{
    public class SessionModel
    {
        public UserModel? User { get; init; }

        public string SessionId { get; private init; }

        public bool IsLoggedIn => User != null;

        public IPAddress? AddressIp { get; set; }

        public DateTime LastActive { get; set; } = DateTime.UtcNow;

        public SessionModel(string sessionId)
        {
            SessionId = sessionId;
        }
    }
}
