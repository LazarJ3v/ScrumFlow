import { TaskStatus, TaskPriority } from "generated/prisma/enums";

export class CreateTaskDto {
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
