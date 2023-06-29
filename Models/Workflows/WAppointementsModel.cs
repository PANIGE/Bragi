namespace Bragi.Models.Workflows
{
    public class WAppointementsModel
    {
        public required WorkflowModel Workflow { get; init; }

        public required string Place { get; init; }

        public required DateTimeOffset Schedule { get; init; }

        public required TeacherModel Teacher { get; init; }

        public required StudentModel Student { get; init; }

    }
}


