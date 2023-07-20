using Bragi.Models.Sessions;

namespace Bragi.Managers
{
    public class UserManager
    {

        private DatabaseManager _dbManager;

        public UserManager(DatabaseManager dbManager)
        {
            _dbManager = dbManager;
        }

        /// <summary>
        /// Get all users matching the display name
        /// </summary>
        /// <param name="displayName">display name to search in</param>
        /// <returns>list of users matching GetAllUsers</returns>
        public async Task<IEnumerable<UserModel>> GetAllUsersMatching(string displayName)
        {
            var userIds = await _dbManager.FetchAll<int>("SELECT id FROM users WHERE display_name LIKE @login",
                new Dictionary<string, object>() { ["login"] = $"%{displayName}%" });

            var users = new List<UserModel>();
            foreach (var rows in userIds)
            {
                users.Add((await GetUserById(rows["id"]))!);
            }

            return users;
        }

        /// <summary>
        /// Get All users
        /// </summary>
        /// <returns>All users</returns>
        public async Task<IEnumerable<UserModel>> GetAllUsers()
        {
            var userIds = await _dbManager.FetchAll<int>("SELECT id FROM users");

            var users = new List<UserModel>();
            foreach (var rows in userIds)
            {
                users.Add((await GetUserById(rows["id"]))!);
            }

            return users;
        }

        /// <summary>
        /// Get All users having a specific role
        /// </summary>
        /// <param name="role">role to be filtered with</param>
        /// <returns> return list of users</returns>
        public async Task<IEnumerable<UserModel>> GetAllUserWithRole(RoleModel role)
        {
            var userIds = await _dbManager.FetchAll<int>("SELECT id FROM users WHERE role_id = @role",
                new Dictionary<string, object>() { ["role"] = role.Id });

            var users = new List<UserModel>();
            foreach (var rows in userIds)
            {
                users.Add((await GetUserById(rows["id"]))!);
            }

            return users;
        }

        /// <summary>
        /// Get a user by it's login
        /// </summary>
        /// <param name="login">login name of the user</param>
        /// <returns>the specific user</returns>
        public async Task<UserModel?> GetUserByLogin(string login)
        {
            var userId = await _dbManager.FetchOne<int>("SELECT id FROM users WHERE login_name = @login", 
                new Dictionary<string, object>() { ["login"] = login });

            if (userId == null)
                return null;

            return await GetUserById(userId["id"]);
        }

        /// <summary>
        /// Get a user by it's ID
        /// </summary>
        /// <param name="id">id of the user</param>
        /// <returns>the user</returns>
        public async Task<UserModel?> GetUserById(int id)
        {
            var user = await _dbManager.FetchOne("SELECT " +
                                                 "u.id, u.login_name, u.display_name, " +
                                                 "u.pw_hash, u.role_id, r.label, r.hold_rights " +
                                                 "FROM users u " +
                                                 "LEFT JOIN roles r on u.role_id = r.id " +
                                                 "WHERE u.id = @user;",
                new Dictionary<string, object> { ["user"] = id });
            if (user == null)
                return null;

            return new UserModel()
            {
                Id = (int)user["id"],
                LoginName = (string)user["login_name"],
                DisplayName = (string)user["display_name"],
                HashPassword = (string)user["pw_hash"],
                Role = new RoleModel
                {
                    Id = (int)user["role_id"],
                    Label = (string)user["label"],
                    HoldRight = (short.Parse(user["hold_rights"].ToString())) == 1
                }
            };

        }

        public async Task<RoleModel[]> GetAllRoles()
        {
            return (await _dbManager.FetchAll<int>("SELECT id FROM roles"))
                .Select(async s => await GetRoleById(s["id"]))
                .Select(s => s.Result!).ToArray();
        }

        public async Task<RoleModel?> GetRoleById(int id)
        {
            var role = await _dbManager.FetchOne("SELECT * FROM roles WHERE id = @role;",
                new Dictionary<string, object> { ["role"] = id });

            if (role == null)
                return null;

            return new RoleModel()
            {
                Id = (int)role["id"],
                Label = (string)role["label"],
                HoldRight = (int)role["hold_rights"] == 1
            };
        }
    }
}
