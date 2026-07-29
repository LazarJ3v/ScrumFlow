import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskPriority, TaskStatus } from 'generated/prisma/enums';

export class UpdateTaskDto extends PartialType(CreateTaskDto) { }
