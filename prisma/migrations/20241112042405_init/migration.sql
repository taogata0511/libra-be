/*
  Warnings:

  - Added the required column `borrower_id` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkout_date` to the `Rental` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expected_return_date` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rental" ADD COLUMN     "borrower_id" INTEGER NOT NULL,
ADD COLUMN     "checkout_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "expected_return_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "return_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Donate" (
    "id" SERIAL NOT NULL,
    "donor_id" INTEGER NOT NULL,
    "book_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_borrower_id_fkey" FOREIGN KEY ("borrower_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donate" ADD CONSTRAINT "Donate_donor_id_fkey" FOREIGN KEY ("donor_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donate" ADD CONSTRAINT "Donate_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
