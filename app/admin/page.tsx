import Link from 'next/link';
import Image from 'next/image';
import { Edit, Plus } from 'lucide-react';
import { getProperties } from '@/lib/db';
import DeletePropertyButton from '@/components/DeletePropertyButton';

export default async function AdminDashboard() {
  const properties = await getProperties();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Daftar Properti</h1>
        <Link href="/admin/add" className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">
          <Plus className="h-5 w-5" />
          Tambah Baru
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Properti</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Harga</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Tipe</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Aksi</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {properties.map((property) => (
              <tr key={property.id}>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        className="h-10 w-10 object-cover"
                        src={property.images[0] || 'https://picsum.photos/seed/placeholder/100/100'}
                        alt=""
                        width={40}
                        height={40}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{property.title}</div>
                      <div className="text-sm text-gray-500">{property.location}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm text-gray-900">{formatPrice(property.price)}</div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className="inline-flex rounded-full bg-indigo-100 px-2 text-xs font-semibold leading-5 text-indigo-800">
                    {property.type}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {property.isFeatured ? (
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      Unggulan
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
                      Standar
                    </span>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <div className="flex justify-end gap-3">
                    <Link href={`/admin/edit/${property.id}`} className="text-indigo-600 hover:text-indigo-900" title="Edit">
                      <Edit className="h-5 w-5" />
                    </Link>
                    <DeletePropertyButton id={property.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
