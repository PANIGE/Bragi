using Bragi.Models.Sessions;

namespace Bragi.Models.Workflows
{
    public class WAssignement
    {
        public required WorkflowModel Workflow { get; init; }
        public required UserModel User { get; init; }
        public required WStepModel WStep { get; init; }
    }
}