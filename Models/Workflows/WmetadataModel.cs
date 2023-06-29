namespace Bragi.Models.Workflows
{
    public class WMetadata
    {
        public required int Id { get; init; }

        public required WorkflowModel Workflow { get; init; }

        public required string IsoCode { get; set; }

        public required string Title { get; set; }

        public required string Biography { get; set; }

        public required string Description { get; set; }
    }
}