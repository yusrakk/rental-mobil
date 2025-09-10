/**
 * EditModal.jsx
 * Modal komponen untuk mengedit data rental mobil
 * Menampilkan form edit dengan validasi dan state management
 */
'use client';

import { useState, useEffect } from 'react';
import { DAFTAR_MOBIL } from '@/models/Mobil';

/**
 * EditModal - Komponen modal untuk edit data rental
 * @param {boolean} isOpen - Status modal terbuka/tertutup
 * @param {Function} onClose - Callback untuk menutup modal
 * @param {Function} onSave - Callback untuk menyimpan perubahan
 * @param {Object} editData - Data rental yang akan diedit
 * @param {boolean} loading - Status loading saat menyimpan
 */
export default function EditModal({ isOpen, onClose, onSave, editData, loading }) {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    namaPenyewa: '',
    namaMobil: '',
    lamaSewa: '',
    extraHour: '0'
  });

  // Effect untuk mengisi form dengan data yang akan diedit
  useEffect(() => {
    if (editData) {
      setFormData({
        namaPenyewa: editData.namaPenyewa || '',
        namaMobil: editData.namaMobil || '',
        lamaSewa: editData.lamaSewa?.toString() || '',
        extraHour: editData.extraHour?.toString() || '0'
      });
    }
  }, [editData]);

  // Mengecek apakah formData berbeda dengan editData asli
  // Tombol simpan hanya aktif jika ada perubahan
  const isChanged = editData && (
    formData.namaPenyewa !== (editData.namaPenyewa || '') ||
    formData.namaMobil !== (editData.namaMobil || '') ||
    formData.lamaSewa !== (editData.lamaSewa?.toString() || '') ||
    formData.extraHour !== (editData.extraHour?.toString() || '0')
  );

  // Handler untuk mengubah nilai input form
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
    onSave({ ...formData, id: editData?.id });
  };

  // Handler untuk menutup modal dan reset form
  const handleClose = () => {
    onClose();
    setFormData({
      namaPenyewa: '',
      namaMobil: '',
      lamaSewa: '',
      extraHour: '0'
    });
  };

  // Jika modal tidak terbuka, tidak render apapun
  if (!isOpen) return null;

  return (
    /* Overlay background dengan opacity untuk modal */
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Container modal dengan styling */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-8 rounded-3xl shadow-2xl border border-blue-100 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header modal */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text mb-3">
            Edit Data Rental
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>
        </div>

        {/* Form edit data rental */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Nama Penyewa */}
          <div className="group">
            <label htmlFor="editNamaPenyewa" className="block text-sm font-bold text-gray-700 mb-2">
              <span>Nama Penyewa <span className="text-red-500 font-bold">*</span></span>
            </label>
            <input
              type="text"
              id="editNamaPenyewa"
              name="namaPenyewa"
              value={formData.namaPenyewa}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 bg-white hover:border-gray-300 group-hover:shadow-md placeholder:text-gray-400 text-black font-medium"
              placeholder="Masukkan nama lengkap penyewa"
            />
          </div>

          {/* Dropdown Pilihan Mobil */}
          <div className="group">
            <label htmlFor="editNamaMobil" className="block text-sm font-bold text-gray-700 mb-2">
              <span>Pilih Mobil <span className="text-red-500 font-bold">*</span></span>
            </label>
            <select
              id="editNamaMobil"
              name="namaMobil"
              value={formData.namaMobil}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 bg-white hover:border-gray-300 group-hover:shadow-md text-black font-medium"
            >
              <option value="" className="text-gray-400">-- Pilih Mobil --</option>
              {/* Loop daftar mobil dari model Mobil.js */}
              {DAFTAR_MOBIL.map((mobil, index) => (
                <option key={index} value={mobil.getNama()} className="text-black font-medium">
                  {mobil.getNama()} - {mobil.getFormattedBiaya()}/hari
                </option>
              ))}
            </select>
          </div>

          {/* Grid untuk input Lama Sewa dan Extra Hour */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Lama Sewa */}
            <div className="group">
              <label htmlFor="editLamaSewa" className="block text-sm font-bold text-gray-700 mb-2">
                <span>Lama Sewa (Hari) <span className="text-red-500 font-bold">*</span></span>
              </label>
              <input
                type="number"
                id="editLamaSewa"
                name="lamaSewa"
                value={formData.lamaSewa}
                onChange={handleChange}
                required
                min="1"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 bg-white hover:border-gray-300 group-hover:shadow-md placeholder:text-gray-400 text-black font-medium"
                placeholder="Berapa hari"
              />
            </div>

            {/* Input Extra Hour */}
            <div className="group">
              <label htmlFor="editExtraHour" className="block text-sm font-bold text-gray-700 mb-2">
                <span>Extra Hour (Jam) <span className="text-gray-400 text-xs">(Optional)</span></span>
              </label>
              <input
                type="number"
                id="editExtraHour"
                name="extraHour"
                value={formData.extraHour}
                onChange={handleChange}
                min="0"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 bg-white hover:border-gray-300 group-hover:shadow-md placeholder:text-gray-400 text-black font-medium"
                placeholder="0"
              />
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center justify-end space-x-4 pt-6">
            {/* Tombol Batal */}
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Batal
            </button>
            {/* Tombol Simpan - disabled jika tidak ada perubahan */}
            <button
              type="submit"
              disabled={loading || !isChanged}
              className={`px-6 py-3 rounded-2xl text-white font-bold shadow-lg transition-all duration-300 transform hover:scale-105 ${
                loading || !isChanged
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? (
                <span>Menyimpan...</span>
              ) : (
                <span>Simpan Perubahan</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
