import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskPriority, TaskStatus } from 'generated/prisma/enums';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
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
