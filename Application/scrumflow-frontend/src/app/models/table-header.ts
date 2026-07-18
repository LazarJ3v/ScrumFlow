import { UserMinimal } from "./user.model.js";

export interface TableHeader {
    sprintName: string;
    sprintGoal: string;
    startDate: Date;
    endDate: Date;
    daysRemaining: number;
    totalStoryPoints: number;
    completedStoryPoints: number;
    onlineMembers: UserMinimal[];
}

