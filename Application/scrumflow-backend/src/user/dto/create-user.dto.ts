import { UserRole } from "../enums/user.enum";

export class CreateUserDto {
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
}