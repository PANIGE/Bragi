using Bragi.Models.Sessions;
using Bragi.Models.Workflows.Axes;

namespace Bragi.Models.Workflows
{
    public class WTask
    {
        public required WStepModel Step { get; init; }

        public required UserModel[] Assignees { get; init; }

        public StateModel? State { get; set; }

        public DateTimeOffset? CompletionTime { get; set; }
        
        public string? Comment { get; set; }

    }
}