/*
  Warnings:

  - You are about to drop the column `timeLogged` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the `ActivityLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Label` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Retrospective` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskLabel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TimeLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActivityLog" DROP CONSTRAINT "ActivityLog_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ActivityLog" DROP CONSTRAINT "ActivityLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Retrospective" DROP CONSTRAINT "Retrospective_sprintId_fkey";

-- DropForeignKey
ALTER TABLE "TaskLabel" DROP CONSTRAINT "TaskLabel_labelId_fkey";

-- DropForeignKey
ALTER TABLE "TaskLabel" DROP CONSTRAINT "TaskLabel_taskId_fkey";

-- DropForeignKey
ALTER TABLE "TimeLog" DROP CONSTRAINT "TimeLog_taskId_fkey";

-- DropForeignKey
ALTER TABLE "TimeLog" DROP CONSTRAINT "TimeLog_userId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "timeLogged";

-- DropTable
DROP TABLE "ActivityLog";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "Label";

-- DropTable
DROP TABLE "Retrospective";

-- DropTable
DROP TABLE "TaskLabel";

-- DropTable
DROP TABLE "TimeLog";
