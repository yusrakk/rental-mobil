/**
 * Footer.jsx
 * Komponen footer aplikasi rental mobil
 * Menampilkan informasi copyright dan database
 */

/**
 * Footer - Komponen footer dengan informasi aplikasi
 */
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Rental Mobil
            </h3>
            <div className="flex justify-center mt-2">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full"></div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-300 text-lg font-medium">
              &copy; 2025 Aplikasi Rental Mobil
            </p>
          </div>
          <div className="bg-gray-700 bg-opacity-50 rounded-2xl p-4 inline-block">
            <p className="text-gray-400 text-sm">
              <span className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>Database: <span className="font-semibold text-blue-300">Rental_Mobil</span></span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span>Tabel: <span className="font-semibold text-purple-300">t_biaya_rental</span></span>
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
