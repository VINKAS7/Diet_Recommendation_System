/*
  Warnings:

  - You are about to drop the column `food_type` on the `Diet` table. All the data in the column will be lost.
  - You are about to drop the column `goal` on the `Diet` table. All the data in the column will be lost.
  - You are about to drop the column `preference` on the `Diet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Diet" DROP COLUMN "food_type",
DROP COLUMN "goal",
DROP COLUMN "preference";
