import { User } from "./user.model";

export interface Team {
    id: number;
    name: string;
    description?: string;
    joinCode: string;
    createdAt: Date;
    updatedAt: Date;
    createdById: number;
    members: User[];
}