-- CreateTable
CREATE TABLE "public"."t_biaya_rental" (
    "id" SERIAL NOT NULL,
    "namaPenyewa" VARCHAR(100) NOT NULL,
    "namaMobil" VARCHAR(50) NOT NULL,
    "program" VARCHAR(50) NOT NULL,
    "biayaPerHari" DECIMAL(10,2) NOT NULL,
    "lamaSewa" INTEGER NOT NULL,
    "extraHour" INTEGER NOT NULL DEFAULT 0,
    "biayaRental" DECIMAL(12,2) NOT NULL,
    "totalBiaya" DECIMAL(12,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "t_biaya_rental_pkey" PRIMARY KEY ("id")
);
