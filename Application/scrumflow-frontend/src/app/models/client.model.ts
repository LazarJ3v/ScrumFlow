import { User, UserRole } from "./user.model.js";

export interface Client extends User {
    role: UserRole.CLIENT;
    watchedProjects: string[]; // projekti koje prati
    lastReviewDate?: Date;             // poslednji sprint review
}