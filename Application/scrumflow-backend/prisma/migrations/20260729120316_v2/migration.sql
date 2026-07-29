/*
  Warnings:

  - You are about to drop the column `backlogItemId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `sprintId` on the `Task` table. All the data in the column will be lost.
  - Made the column `sprintName` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "backlogItemId",
DROP COLUMN "sprintId",
ALTER COLUMN "sprintName" SET NOT NULL;
