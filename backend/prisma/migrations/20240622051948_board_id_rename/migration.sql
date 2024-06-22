/*
  Warnings:

  - The primary key for the `Board` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Board` table. All the data in the column will be lost.
  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Card` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_boardId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP CONSTRAINT "Board_pkey",
DROP COLUMN "id",
ADD COLUMN     "boardId" SERIAL NOT NULL,
ADD CONSTRAINT "Board_pkey" PRIMARY KEY ("boardId");

-- AlterTable
ALTER TABLE "Card" DROP CONSTRAINT "Card_pkey",
DROP COLUMN "id",
ADD COLUMN     "cardId" SERIAL NOT NULL,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("cardId");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("boardId") ON DELETE RESTRICT ON UPDATE CASCADE;
