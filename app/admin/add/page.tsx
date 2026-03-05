'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AddPropertyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>(['']);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get('title'),
      description: formData.get('description'),
      price: Number(formData.get('price')),
      location: formData.get('location'),
      type: formData.get('type'),
      bedrooms: formData.get('bedrooms') ? Number(formData.get('bedrooms')) : undefined,
      bathrooms: formData.get('bathrooms') ? Number(formData.get('bathrooms')) : undefined,
      area: Number(formData.get('area')),
      lat: formData.get('lat') ? Number(formData.get('lat')) : undefined,
      lng: formData.get('lng') ? Number(formData.get('lng')) : undefined,
      images: images.filter((img) => img.trim() !== ''),
      isFeatured: formData.get('isFeatured') === 'on',
    };

    try {
      const res = await fetch('/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        alert('Gagal menambahkan properti');
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="rounded-full bg-white p-2 text-gray-500 shadow-sm hover:text-gray-900">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Tambah Properti Baru</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900">Judul Properti</label>
            <input required type="text" name="title" id="title" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Contoh: Rumah Mewah di Pondok Indah" />
          </div>

          <div>
            <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900">Deskripsi</label>
            <textarea required name="description" id="description" rows={5} className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Jelaskan detail properti..."></textarea>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-900">Harga (Rp)</label>
              <input required type="number" name="price" id="price" min="0" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="15000000000" />
            </div>
            <div>
              <label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-900">Lokasi</label>
              <input required type="text" name="location" id="location" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Pondok Indah, Jakarta Selatan" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="type" className="mb-2 block text-sm font-medium text-gray-900">Tipe Properti</label>
              <select required name="type" id="type" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option value="Rumah">Rumah</option>
                <option value="Apartemen">Apartemen</option>
                <option value="Tanah">Tanah</option>
                <option value="Ruko">Ruko</option>
                <option value="Vila">Vila</option>
              </select>
            </div>
            <div>
              <label htmlFor="area" className="mb-2 block text-sm font-medium text-gray-900">Luas (m&sup2;)</label>
              <input required type="number" name="area" id="area" min="0" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="450" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="bedrooms" className="mb-2 block text-sm font-medium text-gray-900">Kamar Tidur (Opsional)</label>
              <input type="number" name="bedrooms" id="bedrooms" min="0" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="5" />
            </div>
            <div>
              <label htmlFor="bathrooms" className="mb-2 block text-sm font-medium text-gray-900">Kamar Mandi (Opsional)</label>
              <input type="number" name="bathrooms" id="bathrooms" min="0" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="4" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="lat" className="mb-2 block text-sm font-medium text-gray-900">Latitude (Opsional)</label>
              <input type="number" step="any" name="lat" id="lat" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="-6.200000" />
            </div>
            <div>
              <label htmlFor="lng" className="mb-2 block text-sm font-medium text-gray-900">Longitude (Opsional)</label>
              <input type="number" step="any" name="lng" id="lng" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="106.816666" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">URL Gambar</label>
            {images.map((img, index) => (
              <div key={index} className="mb-3 flex gap-2">
                <input
                  type="url"
                  value={img}
                  onChange={(e) => {
                    const newImages = [...images];
                    newImages[index] = e.target.value;
                    setImages(newImages);
                  }}
                  className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="https://picsum.photos/seed/..."
                />
                {index === images.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setImages([...images, ''])}
                    className="rounded-xl bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                  >
                    Tambah
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <input type="checkbox" name="isFeatured" id="isFeatured" className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label htmlFor="isFeatured" className="ml-3 block text-sm font-medium text-gray-900">
              Jadikan Properti Unggulan
            </label>
          </div>
        </div>

        <div className="flex justify-end border-t border-gray-100 pt-6">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-indigo-600 px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            <Save className="h-5 w-5" />
            {loading ? 'Menyimpan...' : 'Simpan Properti'}
          </button>
        </div>
      </form>
    </div>
  );
}
