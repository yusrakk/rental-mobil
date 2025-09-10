/**
 * DiscountInfo.jsx
 * Komponen untuk menampilkan informasi program diskon
 * Menampilkan daftar paket diskon dan extra hour
 */

/**
 * DiscountInfo - Komponen info program diskon
 * Menampilkan Paket 1, 2, 3 dan Extra Hour dalam bentuk grid
 */
export default function DiscountInfo() {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow">
      <div className="mb-4">
        <h3 className="font-bold text-gray-700 text-xl mb-2">Program Diskon Tersedia</h3>
        <div className="h-0.5 w-16 bg-gray-300 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
          <div className="font-semibold text-gray-700 mb-1">Paket 1</div>
          <span className="text-sm text-gray-600">4 hari rental</span>
          <div className="text-right mt-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-bold">10% OFF</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
          <div className="font-semibold text-gray-700 mb-1">Paket 2</div>
          <span className="text-sm text-gray-600">7 hari rental</span>
          <div className="text-right mt-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-bold">20% OFF</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
          <div className="font-semibold text-gray-700 mb-1">Paket 3</div>
          <span className="text-sm text-gray-600">10 hari rental</span>
          <div className="text-right mt-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-bold">25% OFF</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
          <div className="font-semibold text-gray-700 mb-1">Extra Hour</div>
          <span className="text-sm text-gray-600">Per jam tambahan</span>
          <div className="text-right mt-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-bold">Rp 100k</span>
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 bg-white bg-opacity-60 rounded">
        <p className="text-xs text-gray-600 text-center">
          Diskon otomatis teraplikasi berdasarkan lama sewa
        </p>
      </div>
    </div>
  );
}
