import { Admin } from "./admin.model.js";
import { Client } from "./client.model.js";
import { Developer } from "./developer.model.js";
import { ProductOwner } from "./product-owner.model.js";
import { ScrumMaster } from "./scrum-master.model.js";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
    passwordHash: string;
    role: UserRole;
}

export enum UserRole {
    PRODUCT_OWNER = 'PRODUCT_OWNER',
    SCRUM_MASTER = 'SCRUM_MASTER',
    DEVELOPER = 'DEVELOPER',
    CLIENT = 'CLIENT',
    ADMIN = 'ADMIN'
}

export type AppUser =  ProductOwner | ScrumMaster | Developer | Client | Admin;