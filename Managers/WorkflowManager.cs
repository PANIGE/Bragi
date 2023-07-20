using System.Security.Cryptography.X509Certificates;
using Bragi.Models.Sessions;
using Bragi.Models.Workflows;
using System.Linq;
using Bragi.Models.Workflows.Axes;
using System.Reflection;

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
                StewardUser = (await _userManager.GetUserById((int)Workflow["steward_user_id"]))!,
                MarketingUser = Workflow["marketing_user_id"] != null
                    ? await _userManager.GetUserById((int)Workflow["marketing_user_id"])
                    : null,
                DateCreation = DateTimeOffset.Parse((string)Workflow["creation_date"]),
                DateRealese = Workflow["marketing_user_id"] != null
                    ? DateTimeOffset.Parse((string)Workflow["creation_date"])
                    : null,
            };
        }

        public async Task<WStepModel?> GetWorkflowStepById(int id)
        {
            var step = await _dbManager.FetchOne("SELECT * FROM workflow_steps WHERE id = @id",
                new Dictionary<string, object>() { ["id"] = id });
            if (step == null)
                return null;

            return new WStepModel()
            {
                Id = (int)step["id"],
                Label = (string)step["label"],
                Description = (string)step["description"],
                Role = (await _userManager.GetRoleById((int)step["role_id"]))!,
            };
        }

        public async Task<WStepModel[]> GetAllSteps()
        {
            return (await _dbManager.FetchAll<int>("SELECT id FROM workflow_steps"))
                .Select(async s => await GetWorkflowStepById(s["id"]))
                .Select(s => s.Result!).ToArray();
        }

        public async Task<WorkflowModel[]> GetAllWorkflows()
        {
            var workflowsIds = await _dbManager.FetchAll<int>("SELECT id FROM workflows");
            return workflowsIds.Select(async row => await GetWorkflowById(row["id"])).Select(s => s.Result!).ToArray();
        }

        public void Insert(WorkflowModel model)
        {
            _ =_dbManager.Execute("INSERT workflow(label, description, steward_user, marketing_user, date_creation) VALUE (@label, @description, @stewarduser, @marketinguser, @datecreation)",
            new Dictionary<string, object> {["label"] = model.Label, ["description"] = model.Description, ["stewarduser"] = model.StewardUser, ["marketinguser"] = model.MarketingUser!, ["datecreation"] = model.DateCreation} );
        }

        public async Task<WPointer[]> GetPointers(int workflowId)
        {
            var pointers = await _dbManager.FetchAll<int>("SELECT id FROM workflow_pointers WHERE workflow_id = @workflow_id",
                new Dictionary<string, object>() { ["workflow_id"] = workflowId });

            return pointers.Select(async p => await GetPointerById(p["id"])).Select(p => p.Result!).OrderBy(s => s.Time).ToArray();
        }

        public async Task<WPointer> GetPointerById(int id)
        {
            var pointer = await _dbManager.FetchOne(
                "SELECT * FROM workflow_pointers WHERE id = @id",
                new Dictionary<string, object>() { ["id"] = id });

            if (pointer == null)
                return null;

            return new WPointer
            {
                Id = (int)pointer["id"],
                Workflow = (await GetWorkflowById((int)pointer["workflow_id"]))!,
                Step = (await GetWorkflowStepById((int)pointer["step_id"]))!,
                User = (await _userManager.GetUserById((int)pointer["user_id"]))!,
                Time = DateTimeOffset.Parse((string)pointer["date"]),
                State = (await GetStateById((int)pointer["state_id"]))!,
                Description = (string)pointer["description"],
            };
        }

        public async Task<StateModel?> GetStateById(int id)
        {
            var state = await _dbManager.FetchOne("SELECT * FROM states WHERE id = @id",
                new Dictionary<string, object>() { ["id"] = id });

            if (state == null)
                return null;

            return new StateModel()
            {
                Id = (int)state["id"],
                Label = (string)state["label"],
                Description = (string)state["description"],
            };
        }

        public async Task<StateModel[]> GetAllStates()
        {
            return (await _dbManager.FetchAll<int>("SELECT id FROM states"))
                .Select(async s => await GetStateById(s["id"]))
                .Select(s => s.Result!).ToArray();
        }

        public void InsertPointer(int id, UserModel user, StateModel state, WStepModel step, string description)
        {
            _ = _dbManager.Execute("INSERT INTO workflow_pointers(workflow_id, step_id, user_id, state_id, description) VALUE(@id, @step, @user, @state, @description)",
            new Dictionary<string, object> { ["id"] = id, ["step"] = step, ["user"] = user, ["state"] = step, ["description"] = description });
        }
    }
}