/*
  Warnings:

  - You are about to drop the column `donarUserId` on the `Book` table. All the data in the column will be lost.
  - Added the required column `donorUserId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_donarUserId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "donarUserId",
ADD COLUMN     "donorUserId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_donorUserId_fkey" FOREIGN KEY ("donorUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
