import { User, UserRole } from "./user.model.js";

export interface ProductOwner extends User {
    role: UserRole.PRODUCT_OWNER;
    projects: string[]; // projekti kojima je PO
    totalBacklogItems: number; // ukupno stavki u backlogu
    activeSprintId?: string; // trenutno aktivan sprint
}