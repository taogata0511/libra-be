/*
  Warnings:

  - You are about to drop the column `donorUserId` on the `Book` table. All the data in the column will be lost.
  - Added the required column `donor_user_id` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_donorUserId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "donorUserId",
ADD COLUMN     "donor_user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_donor_user_id_fkey" FOREIGN KEY ("donor_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;