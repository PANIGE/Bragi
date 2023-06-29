using Bragi.Models.Sessions;
using Bragi.Models.Workflows;

namespace Bragi.Managers
{

    public class WorkflowManager
    {
        private DatabaseManager _dbManager;
        private UserManager _userManager;

        public WorkflowManager(DatabaseManager dbManager, UserManager userManager)
        {
            _dbManager = dbManager;
            _userManager = userManager;
        }

        public async Task<WorkflowModel?> GetWorkflowById(int id)
        {
            var Workflow = await _dbManager.FetchOne("SELECT * FROM workflows WHERE id = @workflow",
            new Dictionary<string, object> { ["workflow"] = id });

            if (Workflow == null)
            {
                return null;
            }

            return new WorkflowModel()
            {
                Id = (int)Workflow["id"],
                Label = (string)Workflow["label"],
                Description = (string)Workflow["description"],
                StewardUser = await _userManager.GetUserById((int)Workflow["steward_user_id"]),
                MarketingUser = Workflow["marketing_user_id"] != null
                    ? await _userManager.GetUserById((int)Workflow["marketing_user_id"])
                    : null,
                DateCreation = DateTimeOffset.Parse((string)Workflow["creation_date"]),
                Daterealese = Workflow["marketing_user_id"] != null
                    ? DateTimeOffset.Parse((string)Workflow["creation_date"])
                    : null,
            };
        }

        public async Task<WorkflowModel> GetAllWorkflows()
        {
            throw new NotImplementedException();
        }

        public void Insert(WorkflowModel model)
        {
            throw new NotImplementedException();
        }
    }
}