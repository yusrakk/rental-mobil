/**
 * Class Mobil untuk mendefinisikan data mobil rental
 */
export class Mobil {
  constructor(nama, biayaPerHari) {
    this.nama = nama;
    this.biayaPerHari = biayaPerHari;
  }

  // Getter untuk nama mobil
  getNama() {
    return this.nama;
  }

  // Getter untuk biaya per hari
  getBiayaPerHari() {
    return this.biayaPerHari;
  }

  // Method untuk format currency
  getFormattedBiaya() {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(this.biayaPerHari);
  }
}

/**
 * Data master mobil yang tersedia
 */
export const DAFTAR_MOBIL = [
  new Mobil('Avanza', 640000),
  new Mobil('Innova', 890000),
  new Mobil('New Altis', 1500000),
  new Mobil('New Camry', 1500000), // Asumsi sama dengan New Altis karena tidak disebutkan
  new Mobil('Alphard', 3220000)
];

/**
 * Fungsi untuk mendapatkan mobil berdasarkan nama
 */
export function getMobilByNama(nama) {
  return DAFTAR_MOBIL.find(mobil => mobil.getNama() === nama);
}
