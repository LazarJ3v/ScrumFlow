import { TaskPriority, TaskStatus } from "../enums/task.enum";

export class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    storyPoints: number;
    isBlocked: boolean;
    blockedReason?: string;
    commentsCount: number;
    attachmentsCount: number;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    backlogItemTitle: string;
    sprintName: string;
    assigneeId: number;
    createdById: number;
}
