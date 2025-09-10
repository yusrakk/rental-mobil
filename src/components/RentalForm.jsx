/**
 * RentalForm.jsx
 * Form komponen untuk input data rental mobil baru
 * Menampilkan form dengan validasi dan tombol submit
 */
'use client';

import { useState } from 'react';
import { DAFTAR_MOBIL } from '@/models/Mobil';
import DiscountInfo from './DiscountInfo';

/**
 * RentalForm - Komponen form untuk rental mobil
 * @param {Function} onSubmit - Callback untuk handle submit form
 * @param {boolean} loading - Status loading saat submit
 */
export default function RentalForm({ onSubmit, loading }) {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    namaPenyewa: '',
    namaMobil: '',
    lamaSewa: '',
    extraHour: '0'
  });

  // Handler untuk mengubah nilai input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-3">Form Rental Mobil</h2>
        <div className="h-1 w-24 bg-gray-300 rounded-full"></div>
        <p className="text-gray-500 mt-2 text-sm">Silakan isi formulir di bawah untuk rental mobil</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label htmlFor="namaPenyewa" className="block text-sm font-bold text-gray-700 mb-2">
            <span>Nama Penyewa <span className="text-red-500 font-bold">*</span></span>
          </label>
          <input
            type="text"
            id="namaPenyewa"
            name="namaPenyewa"
            value={formData.namaPenyewa}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 bg-white hover:border-gray-300 group-hover:shadow-md placeholder:text-gray-400 text-black font-medium"
            placeholder="Masukkan nama lengkap penyewa"
          />
        </div>

        <div className="group">
          <label htmlFor="namaMobil" className="block text-sm font-bold text-gray-700 mb-2">
            <span>Pilih Mobil <span className="text-red-500 font-bold">*</span></span>
          </label>
          <select
            id="namaMobil"
            name="namaMobil"
            value={formData.namaMobil}
            onChange={handleChange}
            required
            className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 bg-white hover:border-gray-300 group-hover:shadow-md text-black font-medium"
          >
            <option value="" className="text-gray-400">-- Pilih Mobil --</option>
            {DAFTAR_MOBIL.map((mobil, index) => (
              <option key={index} value={mobil.getNama()} className="text-black font-medium">
                {mobil.getNama()} - {mobil.getFormattedBiaya()}/hari
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label htmlFor="lamaSewa" className="block text-sm font-bold text-gray-700 mb-2">
              <span>Lama Sewa (Hari) <span className="text-red-500 font-bold">*</span></span>
            </label>
            <input
              type="number"
              id="lamaSewa"
              name="lamaSewa"
              value={formData.lamaSewa}
              onChange={handleChange}
              required
              min="1"
              className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 bg-white hover:border-gray-300 group-hover:shadow-md placeholder:text-gray-400 text-black font-medium"
              placeholder="Berapa hari"
            />
          </div>

          <div className="group">
            <label htmlFor="extraHour" className="block text-sm font-bold text-gray-700 mb-2">
              <span>Extra Hour (Jam) <span className="text-gray-400 text-xs">(Optional)</span></span>
            </label>
            <input
              type="number"
              id="extraHour"
              name="extraHour"
              value={formData.extraHour}
              onChange={handleChange}
              min="0"
              className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 bg-white hover:border-gray-300 group-hover:shadow-md placeholder:text-gray-400 text-black font-medium"
              placeholder="0"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-5 px-6 rounded-full text-white font-bold text-lg shadow transition-all duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 hover:shadow-lg'
            }`}
          >
            {loading ? (
              <span>Sedang Memproses...</span>
            ) : (
              <span>Hitung & Simpan Rental</span>
            )}
          </button>
        </div>
      </form>

      <DiscountInfo />
    </div>
  );
}
