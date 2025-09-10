'use client';

import { useState, useEffect } from 'react';

export const useRentalData = () => {
  const [rentalData, setRentalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch data rental
  const fetchRentalData = async () => {
    try {
      const response = await fetch('/api/rental');
      const result = await response.json();
      
      if (result.success) {
        setRentalData(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Load data saat pertama kali
  useEffect(() => {
    fetchRentalData();
  }, []);

  // Handle submit form baru
  const handleSubmit = async (formData) => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/rental', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage(`✅ ${result.message}`);
        // Refresh data
        await fetchRentalData();
        // Clear form by triggering re-render
        window.location.reload();
      } else {
        setMessage(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle update data
  const handleUpdate = async (formData) => {
    setMessage('');

    try {
      const response = await fetch('/api/rental', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage(`✅ Data berhasil diupdate`);
        await fetchRentalData();
      } else {
        setMessage(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  // Handle delete data
  const handleDelete = async (id, namaPenyewa) => {
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus data rental atas nama "${namaPenyewa}"?`
    );

    if (!confirmDelete) return;

    setMessage('');

    try {
      const response = await fetch(`/api/rental?id=${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        setMessage(`✅ Data berhasil dihapus`);
        await fetchRentalData();
      } else {
        setMessage(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return {
    rentalData,
    loading,
    message,
    setMessage,
    fetchRentalData,
    handleSubmit,
    handleUpdate,
    handleDelete
  };
};
