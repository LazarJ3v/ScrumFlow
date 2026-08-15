import { User } from "generated/prisma/browser";

export class Team {
    id: string;
    name: string;
    description?: string;
    joinCode: string;
    createdAt: Date;
    UpdatedAt: Date;
    createdById: string;
    members: User[];
}
