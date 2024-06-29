/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `allergies` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `food_type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `goal` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `medical_condition` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `preference` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "allergies",
DROP COLUMN "food_type",
DROP COLUMN "gender",
DROP COLUMN "goal",
DROP COLUMN "height",
DROP COLUMN "medical_condition",
DROP COLUMN "preference",
DROP COLUMN "time",
DROP COLUMN "weight";

-- CreateTable
CREATE TABLE "Diet" (
    "id" SERIAL NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "food_type" TEXT NOT NULL,
    "preference" TEXT,
    "allergies" TEXT,
    "medical_condition" TEXT,
    "time" TIMESTAMP(3) NOT NULL,
    "diet_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Diet_diet_id_key" ON "Diet"("diet_id");

-- AddForeignKey
ALTER TABLE "Diet" ADD CONSTRAINT "Diet_diet_id_fkey" FOREIGN KEY ("diet_id") REFERENCES "User"("u_id") ON DELETE RESTRICT ON UPDATE CASCADE;
