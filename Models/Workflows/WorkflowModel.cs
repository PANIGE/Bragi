using Bragi.Models.Sessions;

namespace Bragi.Models.Workflows
{
    public class WorkflowModel
    {
        public required int Id { get; init; }

        public required string Label { get; init; }

        public required string Description { get; init; }

        public required UserModel StewardUser { get; init; }

        public UserModel? MarketingUser { get; init; }

        public required DateTimeOffset DateCreation { get; init; }

        public  DateTimeOffset? DateRealese { get; init; }
    }
}

