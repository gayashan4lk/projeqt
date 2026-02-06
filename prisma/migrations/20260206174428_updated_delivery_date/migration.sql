/*
  Warnings:

  - You are about to drop the column `DeliveryDate` on the `Project` table. All the data in the column will be lost.
  - Added the required column `deliveryDate` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "DeliveryDate",
ADD COLUMN     "deliveryDate" TIMESTAMP(3) NOT NULL;
