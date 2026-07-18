import { User, UserRole } from "./user.model.js";

export interface ScrumMaster extends User {
    role: UserRole.SCRUM_MASTER;
    projects: string[];
    activeStandupSessionId?: string; // trenutna standup sesija
    blockedTasksCount: number; // broj blokiranih taskova
}