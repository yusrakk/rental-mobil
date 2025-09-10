'use client';

import { useState } from 'react';

export const useEditModal = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editLoading, setEditLoading] = useState(false);

  const openEditModal = (rental) => {
    setEditData(rental);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditData(null);
  };

  const handleSaveEdit = async (formData, onUpdate) => {
    setEditLoading(true);
    
    try {
      await onUpdate(formData);
      closeEditModal();
    } catch (error) {
      console.error('Error updating data:', error);
    } finally {
      setEditLoading(false);
    }
  };

  return {
    isEditModalOpen,
    editData,
    editLoading,
    openEditModal,
    closeEditModal,
    handleSaveEdit
  };
};
