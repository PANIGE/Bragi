using Bragi.Models.Sessions;

namespace Bragi.Models.Workflows
{
    public class WorkflowModel
    {
        public required string Id { get; init; }

        public required string Label { get; init; }

        public required string Description { get; init; }

        public required UserModel StewardUser { get; init; }

        public required UserModel? MarketingUser { get; init; }

        public required DateTimeOffset DateCreation { get; init; }

        public required DateTimeOffset? Daterealese { get; init; }
    }
}

