import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function displayData() {
  try {
    const rentals = await prisma.biayaRental.findMany({
      orderBy: { id: 'asc' }
    });

    if (rentals.length === 0) {
      console.log('Belum ada data rental.');
      return;
    }

    console.log('\n📊 DATA RENTAL MOBIL - Database: Rental_Mobil | Tabel: t_biaya_rental');
    console.log('='.repeat(160));
    console.log('| No | Nama Penyewa     | Nama Mobil  | Program   | Biaya/Hari    | Lama Sewa | Extra Hour | Biaya Rental    | Total Biaya     |');
    console.log('='.repeat(160));

    rentals.forEach((rental, index) => {
      const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(amount);
      };

      const no = (index + 1).toString().padEnd(2);
      const nama = rental.namaPenyewa.substring(0, 16).padEnd(16);
      const mobil = rental.namaMobil.padEnd(11);
      const program = rental.program.padEnd(9);
      const biayaHari = formatCurrency(Number(rental.biayaPerHari)).padEnd(13);
      const lama = `${rental.lamaSewa} hari`.padEnd(9);
      const extra = `${rental.extraHour} jam`.padEnd(10);
      const biayaRental = formatCurrency(Number(rental.biayaRental)).padEnd(15);
      const total = formatCurrency(Number(rental.totalBiaya)).padEnd(15);

      console.log(`| ${no} | ${nama} | ${mobil} | ${program} | ${biayaHari} | ${lama} | ${extra} | ${biayaRental} | ${total} |`);
    });

    console.log('='.repeat(160));
    console.log(`Total ${rentals.length} transaksi rental`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

displayData();
