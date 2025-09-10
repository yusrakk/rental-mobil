export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Rental Mobil
          </span>
        </h1>
        <p className="text-center text-xl text-blue-100 font-medium">
          Sistem Manajemen Rental Mobil dengan Program Diskon Menarik
        </p>
        <div className="flex justify-center mt-6">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
