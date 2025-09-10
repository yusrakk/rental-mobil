'use client';

import RentalForm from '@/components/RentalForm';
import RentalTable from '@/components/RentalTable';
import EditModal from '@/components/EditModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRentalData } from '@/hooks/useRentalData';
import { useEditModal } from '@/hooks/useEditModal';

export default function Home() {
  // Custom hooks untuk data managementy
  const {
    rentalData,
    loading,
    message,
    handleSubmit,
    handleUpdate,
    handleDelete
  } = useRentalData();

  const {
    isEditModalOpen,
    editData,
    editLoading,
    openEditModal,
    closeEditModal,
    handleSaveEdit
  } = useEditModal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Message */}
        {message && (
          <div className={`mb-8 p-6 rounded-2xl shadow-lg backdrop-blur-sm ${
            message.includes('✅') 
              ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200 shadow-green-100' 
              : 'bg-gradient-to-r from-red-50 to-pink-50 text-red-800 border border-red-200 shadow-red-100'
          }`}>
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${message.includes('✅') ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
              <span className="font-semibold">{message}</span>
            </div>
          </div>
        )}

        {/* Form Section */}
        <div className="mb-12">
          <RentalForm onSubmit={handleSubmit} loading={loading} />
        </div>

        {/* Table Section */}
        <RentalTable 
          rentals={rentalData} 
          loading={loading}
          onEdit={openEditModal}
          onDelete={handleDelete}
        />
      </main>

      {/* Edit Modal */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSave={(formData) => handleSaveEdit(formData, handleUpdate)}
        editData={editData}
        loading={editLoading}
      />

      <Footer />
    </div>
  );
}
