import { Priority, TaskStatus } from "../enums/task.enum";

export class Task {
    id: string;
    title: string;
    backlogItemTitle: string;
    backlogItemId: string;
    status: TaskStatus;
    storyPoints: number;
    priority: Priority;
    assigneeId: number;
    isBlocked: boolean;
    blockedReason?: string;
    subtasks: {
        total: number;
        completed: number;
    };
    commentsCount: number;
    attachmentsCount: number;
    timeLogged: number;
    dueDate?: Date;
    labels?: string[];
}
