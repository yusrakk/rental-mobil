import { getMobilByNama } from './Mobil.js';
import { getProgramTerbaik } from './Program.js';

/**
 * Class RentalMobil untuk menangani logika bisnis rental
 */
export class RentalMobil {
  constructor() {
    this.BIAYA_EXTRA_PER_JAM = 100000;
  }

  /**
   * Method untuk menghitung total biaya rental
   * @param {string} namaPenyewa 
   * @param {string} namaMobil 
   * @param {number} lamaSewa (dalam hari)
   * @param {number} extraHour (jam tambahan)
   * @returns {Object} Detail perhitungan rental
   */
  hitungBiayaRental(namaPenyewa, namaMobil, lamaSewa, extraHour = 0) {
    // Validasi input
    if (!namaPenyewa || !namaMobil || lamaSewa <= 0) {
      throw new Error('Input tidak valid');
    }

    // Dapatkan data mobil
    const mobil = getMobilByNama(namaMobil);
    if (!mobil) {
      throw new Error(`Mobil ${namaMobil} tidak ditemukan`);
    }

    // Dapatkan program terbaik
    const program = getProgramTerbaik(lamaSewa);

    // Hitung biaya dasar (per hari)
    const biayaDasar = mobil.getBiayaPerHari() * lamaSewa;

    // Hitung biaya extra hour
    const biayaExtra = extraHour * this.BIAYA_EXTRA_PER_JAM;

    // Hitung total sebelum diskon
    const totalSebelumDiskon = biayaDasar + biayaExtra;

    // Hitung diskon
    const diskon = program.hitungDiskon(biayaDasar); // Diskon hanya untuk biaya dasar

    // Hitung biaya rental setelah diskon
    const biayaRental = biayaDasar - diskon;

    // Total biaya akhir
    const totalBiaya = biayaRental + biayaExtra;

    return {
      namaPenyewa,
      namaMobil: mobil.getNama(),
      program: program.getNama(),
      biayaPerHari: mobil.getBiayaPerHari(),
      lamaSewa,
      extraHour,
      biayaDasar,
      biayaExtra,
      diskon,
      biayaRental,
      totalBiaya,
      programDetail: `${program.getNama()} (${program.getDiskon()}% diskon)`
    };
  }

  /**
   * Method untuk format currency Indonesia
   */
  formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  /**
   * Method untuk mendapatkan detail biaya dalam format string
   */
  getDetailBiaya(calculationResult) {
    const { program, diskon, biayaExtra, extraHour } = calculationResult;
    
    let detail = program;
    
    if (diskon > 0) {
      detail += ` (Diskon: ${this.formatCurrency(diskon)})`;
    }
    
    if (extraHour > 0) {
      detail += ` + Extra ${extraHour} jam (${this.formatCurrency(biayaExtra)})`;
    }
    
    return detail;
  }
}
