/**
 * Class Program untuk mendefinisikan paket program rental
 */
export class Program {
  constructor(nama, minHari, diskon, deskripsi) {
    this.nama = nama;
    this.minHari = minHari;
    this.diskon = diskon; // dalam persen (10 untuk 10%)
    this.deskripsi = deskripsi;
  }

  // Getter untuk nama program
  getNama() {
    return this.nama;
  }

  // Getter untuk minimum hari
  getMinHari() {
    return this.minHari;
  }

  // Getter untuk diskon
  getDiskon() {
    return this.diskon;
  }

  // Method untuk mengecek apakah lama sewa memenuhi program ini
  isEligible(lamaSewa) {
    if (this.nama === 'Harian') return true;
    return lamaSewa >= this.minHari;
  }

  // Method untuk menghitung diskon
  hitungDiskon(biayaTotal) {
    return biayaTotal * (this.diskon / 100);
  }
}

/**
 * Data master program rental yang tersedia
 */
export const DAFTAR_PROGRAM = [
  new Program('Paket 3', 10, 25, '10 hari - Diskon 25%'),
  new Program('Paket 2', 7, 20, '7 hari - Diskon 20%'),
  new Program('Paket 1', 4, 10, '4 hari - Diskon 10%'),
  new Program('Harian', 1, 0, 'Harian - Tanpa Diskon')
];

/**
 * Fungsi untuk mendapatkan program terbaik berdasarkan lama sewa
 */
export function getProgramTerbaik(lamaSewa) {
  // Cari program dengan diskon terbesar yang sesuai dengan lama sewa
  for (const program of DAFTAR_PROGRAM) {
    if (program.isEligible(lamaSewa)) {
      return program;
    }
  }
  return DAFTAR_PROGRAM[DAFTAR_PROGRAM.length - 1]; // Return program harian sebagai default
}
