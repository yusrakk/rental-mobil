# Rental Mobil 

Aplikasi web untuk manajemen rental mobil dengan fitur input, edit, hapus, dan rekap data transaksi rental. Dibangun menggunakan Next.js, React, dan TailwindCSS. Aplikasi ini di didirikan Oleh Yusa Putra Rosdiana, Mahasiswa dari Universitas Siliwangi.

---

## 🚗 Fitur Utama

- Input data rental mobil (nama penyewa, mobil, lama sewa, extra hour)
- Tabel rekap transaksi rental
- Edit dan hapus data rental
- Program diskon otomatis berdasarkan lama sewa
- Rekap total transaksi dan revenue
- UI modern dan responsif

---

## ⚡ Instalasi & Menjalankan Aplikasi

1. **Clone repository:**
   ```bash
   git clone https://github.com/username/rental-mobil.git
   cd rental-mobil
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan server development:**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Buka aplikasi di browser:**
   [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Struktur Utama

- `src/app/page.js` : Halaman utama aplikasi
- `src/components/` : Komponen UI (Form, Table, Modal, Footer, dll)
- `src/hooks/` : Custom hooks untuk data dan modal
- `src/models/` : Logika bisnis dan data mobil/program
- `src/app/api/rental/route.js` : API untuk CRUD data rental

---

## 🎯 Kegunaan

Aplikasi ini cocok untuk:
- Usaha rental mobil skala kecil/menengah
- Admin rental yang ingin rekap transaksi harian
- Simulasi perhitungan biaya rental dan diskon otomatis
- Monitoring pendapatan dan statistik rental

---

## 📚 Dokumentasi & Pengembangan

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

## ✨ Kontribusi

Pull request dan issue