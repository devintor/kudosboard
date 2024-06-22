/*
  Warnings:

  - The primary key for the `Board` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `boardId` on the `Board` table. All the data in the column will be lost.
  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `boardId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `cardId` on the `Card` table. All the data in the column will be lost.
  - Added the required column `board_id` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_boardId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP CONSTRAINT "Board_pkey",
DROP COLUMN "boardId",
ADD COLUMN     "board_id" SERIAL NOT NULL,
ADD CONSTRAINT "Board_pkey" PRIMARY KEY ("board_id");

-- AlterTable
ALTER TABLE "Card" DROP CONSTRAINT "Card_pkey",
DROP COLUMN "boardId",
DROP COLUMN "cardId",
ADD COLUMN     "board_id" INTEGER NOT NULL,
ADD COLUMN     "card_id" SERIAL NOT NULL,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("card_id");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "Board"("board_id") ON DELETE RESTRICT ON UPDATE CASCADE;
