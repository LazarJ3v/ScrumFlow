import { Task } from "src/task/entities/task.entity";
import { UserRole } from "../enums/user.enum";

export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
    passwordHash: string;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date
    lastLoginAt: Date
    assignedTasks: Task[];
    createdTasks: Task[];
}