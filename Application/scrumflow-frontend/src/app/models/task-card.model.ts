import { UserMinimal } from "./user.model.js";

export interface TaskCard {
    id: string;
    title: string;
    backlogItemTitle: string;
    backlogItemId: string;
    status: TaskStatus;
    storyPoints: number;
    priority: Priority;
    assignee?: UserMinimal;
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

export interface TaskCardMinimal {
    id: string;
    title: string;
    backlogItemTitle: string;
    backlogItemId: string;
    status: TaskStatus;
    priority: Priority;
    storyPoints: number;
    assignee?: UserMinimal;
    commentsCount: number;
    attachmentsCount: number;
    dueDate?: Date;
}

export enum Priority {
    CRITICAL = 'CRITICAL',
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
}

export enum TaskStatus {
    TO_DO = 'TO_DO',
    IN_PROGRESS = 'IN_PROGRESS',
    REVIEW = 'REVIEW',
    DONE = 'DONE',
}