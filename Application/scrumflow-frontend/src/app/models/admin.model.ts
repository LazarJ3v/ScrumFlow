import { User, UserRole } from "./user.model.js";

export interface Admin extends User {
  role: UserRole.ADMIN;
  managedProjectsCount: number;
  lastAuditAction?: string;
}
