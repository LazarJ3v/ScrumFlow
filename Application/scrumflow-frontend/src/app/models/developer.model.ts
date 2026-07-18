import { User, UserRole } from "./user.model.js";

export interface Developer extends User {
    role: UserRole.DEVELOPER;
    assignedTasks: string[]; // taskovi dodeljeni njemu
    currentSprintPoints: number; // story poeni u tekucem sprintu
    completedTasksCount: number;
    skills?: string[]; // opciono: tehnologije
    standupTimeSeconds?: number; // prosecno vreme na standupu
}