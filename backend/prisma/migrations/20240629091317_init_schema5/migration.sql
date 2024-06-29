-- DropIndex
DROP INDEX "Diet_diet_id_key";

-- AlterTable
ALTER TABLE "Diet" ADD CONSTRAINT "Diet_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "cal" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "Carbs" DOUBLE PRECISION NOT NULL,
    "f_id" INTEGER NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_f_id_fkey" FOREIGN KEY ("f_id") REFERENCES "Diet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
