namespace Bragi.Models.Sessions
{
    public class UserModel
    {
        public required int Id { get; init; }

        public required string LoginName { get; init; }

        public required string DisplayName { get; init; }

        public required string HashPassword { get; init; }

        public required RoleModel Role { get; init; }

        public bool CheckPassword(string password)
        {
            return BCrypt.Net.BCrypt.Verify(password, HashPassword);
        }

        public static implicit operator UserModel(int v)
        {
            throw new NotImplementedException();
        }
    }
}
