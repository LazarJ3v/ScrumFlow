import { TaskStatus, TaskPriority } from "generated/prisma/enums";

export class CreateTaskDto {
    title: string;
    description?: string;
    status?: TaskStatus;
    priority?: TaskPriority;
    storyPoints?: number;
    isBlocked?: boolean;
    blockedReason?: string;
    dueDate?: string;
    assigneeId?: number;
    createdById?: number;
    backlogItemId?: number;
    sprintId?: number;
}
