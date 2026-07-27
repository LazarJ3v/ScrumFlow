export class CreateTaskDto {
    title: string = 'default';
    backlogItemTitle: string = 'default';
    backlogItemId: string = 'default';
    status: TaskStatus;
    storyPoints: number = 0;
    priority: Priority;
    assigneeId: number = 0;
    isBlocked: boolean = false;
    blockedReason?: string = 'default';
    subtasks: {
        total: number;
        completed: number;
    } | undefined;
    commentsCount: number = 0;
    attachmentsCount: number = 0;
    timeLogged: number = 0;
    dueDate: Date = new Date();
    labels?: string[]
}