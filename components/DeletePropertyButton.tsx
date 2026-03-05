'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';

export default function DeletePropertyButton({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Apakah Anda yakin ingin menghapus properti ini?')) return;
    
    setLoading(true);
    try {
      const res = await fetch(`/api/properties/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        router.refresh();
      } else {
        alert('Gagal menghapus properti');
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      disabled={loading}
      className="text-red-600 hover:text-red-900 disabled:opacity-50"
      title="Hapus"
    >
      <Trash2 className="h-5 w-5" />
    </button>
  );
}
