export class CreateTeamDto {
    name: string;
    description?: string;
    joinCode: string;
    createdAt: Date;
    UpdatedAt: Date;
    createdById: number;
}
