namespace Bragi.Models.Sessions
{
    public class RoleModel
    {
        public required int Id { get; init; }

        public required string Label { get; init; }

        public required bool HoldRight { get; init; }
    }
}