using Bragi.Models.Sessions;

namespace Bragi.Models.Workflows
{
    public class WStepModel
    { 
        public required int Id { get; init; }

        public required string Label { get; init; }

        public required string Description { get; init; }

        public required RoleModel Role { get; set; }
    }
}