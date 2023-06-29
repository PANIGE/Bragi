using Bragi.Models.Sessions;
using Bragi.Models.Workflows.Axes;

namespace Bragi.Models.Workflows
{
    public class WPointer
    {
        public required int Id { get; init; }

        public required DateTimeOffset Time { get; init; }

        public required WorkflowModel Workflow { get; init; }

        public required WStepModel Step{ get; init; }

        public required UserModel User { get; init; }

        public required StateModel State { get; init; }

        public required string Description { get; init; }


    }
}