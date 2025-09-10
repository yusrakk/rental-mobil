/**
 * RentalTable.jsx
 * Tabel komponen untuk menampilkan data rental mobil
 * Menampilkan daftar rental dengan fitur edit dan delete
 */
'use client';

import { RentalMobil } from '@/models/RentalMobil';

// Instance service untuk format currency
const rentalService = new RentalMobil();

/**
 * RentalTable - Komponen tabel data rental
 * @param {Array} rentals - Array data rental
 * @param {Function} onEdit - Callback untuk edit rental
 * @param {Function} onDelete - Callback untuk delete rental
 */
export default function RentalTable({ rentals, onEdit, onDelete }) {
  // Jika tidak ada data rental, tampilkan pesan kosong
  if (!rentals || rentals.length === 0) {
    return (
      <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 p-12 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-blue-200 transition-all duration-500">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-gray-600 via-blue-600 to-indigo-600 bg-clip-text mb-3">Data Rental Mobil</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gray-400 via-blue-400 to-indigo-400 rounded-full mx-auto"></div>
          </div>
          <div className="py-12">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-50 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <div className="text-2xl font-bold text-blue-500">📋</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Belum Ada Data Rental</h3>
            <p className="text-gray-500 text-sm">Data akan muncul setelah ada transaksi rental baru.</p>
            <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-blue-600 text-sm font-medium">Gunakan form di atas untuk menambah data rental</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Container utama tabel rental
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-500">
      {/* Header tabel */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-3">Data Rental Mobil</h2>
        <div className="h-1 w-24 bg-gray-300 rounded-full"></div>
        <p className="text-gray-500 mt-2 text-sm">Daftar semua transaksi rental yang telah dilakukan</p>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        {/* Tabel data rental */}
        <table className="min-w-full table-auto">
          {/* Header tabel */}
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider rounded-tl-2xl">
                <span>No</span>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                <span>Nama Penyewa</span>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                <span>Nama Mobil</span>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                <span>Program</span>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                <span>Biaya/Hari</span>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                <span>Lama Sewa</span>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                <span>Extra Hour</span>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                <span>Biaya Rental</span>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                <span>Total Biaya</span>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider rounded-tr-2xl">
                <span>Aksi</span>
              </th>
            </tr>
          </thead>
          {/* Body tabel - loop data rental */}
          <tbody className="divide-y divide-gray-100">
            {rentals.map((rental, index) => (
              <tr key={rental.id} className="hover:bg-gray-100 transition-all duration-200">
                {/* Kolom nomor urut */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                </td>
                {/* Kolom nama penyewa */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <span className="text-sm font-bold text-gray-800">{rental.namaPenyewa}</span>
                </td>
                {/* Kolom nama mobil */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <span className="text-sm font-semibold text-gray-700">{rental.namaMobil}</span>
                </td>
                {/* Kolom program rental (Paket/Harian) */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <span className="text-xs font-bold text-gray-700">{rental.program}</span>
                </td>
                {/* Kolom biaya per hari dengan format currency */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <span className="text-sm font-bold text-gray-800">{rentalService.formatCurrency(Number(rental.biayaPerHari))}</span>
                </td>
                {/* Kolom lama sewa dalam hari */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-700">{rental.lamaSewa} hari</span>
                </td>
                {/* Kolom extra hour dalam jam */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-700">{rental.extraHour} jam</span>
                </td>
                {/* Kolom biaya rental dengan format currency */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <span className="text-sm font-bold text-gray-700">{rentalService.formatCurrency(Number(rental.biayaRental))}</span>
                </td>
                {/* Kolom total biaya dengan format currency */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <span className="text-lg font-bold text-gray-700">{rentalService.formatCurrency(Number(rental.totalBiaya))}</span>
                </td>
                {/* Kolom aksi - tombol edit dan hapus */}
                <td className="px-6 py-6 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onEdit && onEdit(rental)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-all duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete && onDelete(rental.id, rental.namaPenyewa)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-all duration-200"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary dan statistik data rental */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border border-blue-100 shadow-lg">
        {/* Header summary */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <span className="text-lg font-bold text-gray-700">
            Total: <span className="text-gray-700">{rentals.length} transaksi</span> rental
          </span>
          <span className="text-sm text-gray-500 font-medium">Data diurutkan berdasarkan waktu terbaru</span>
        </div>
        
        {/* Grid statistik rental */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            {/* Statistik paket diskon */}
            <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600 font-medium mb-1">Paket Diskon</div>
              <div className="text-lg font-bold text-gray-700">
                {rentals.filter(d => d.program.includes('Paket')).length}
              </div>
            </div>
            {/* Statistik non paket (harian) */}
            <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600 font-medium mb-1">Non Paket</div>
              <div className="text-lg font-bold text-gray-700">
                {rentals.filter(d => d.program.includes('Harian')).length}
              </div>
            </div>
            {/* Statistik rental dengan extra hour */}
            <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600 font-medium mb-1">Dengan Extra Hour</div>
              <div className="text-lg font-bold text-gray-700">
                {rentals.filter(d => d.extraHour > 0).length}
              </div>
            </div>
            {/* Statistik total revenue */}
            <div className="bg-white p-3 rounded border border-gray-200 shadow-sm">
              <div className="text-sm text-gray-600 font-medium mb-1">Total Revenue</div>
              <div className="text-sm font-bold text-gray-700">
                {rentalService.formatCurrency(rentals.reduce((sum, d) => sum + Number(d.totalBiaya), 0))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
