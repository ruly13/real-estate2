import { getProperties } from '@/lib/db';
import PropertyCard from '@/components/PropertyCard';
import { Search, MapPin, Home as HomeIcon } from 'lucide-react';
import MapWrapper from '@/components/MapWrapper';

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const location = typeof params.location === 'string' ? params.location : '';
  const type = typeof params.type === 'string' ? params.type : '';
  const featured = params.featured === 'true';

  let properties = await getProperties();

  if (location) {
    properties = properties.filter((p) => p.location.toLowerCase().includes(location.toLowerCase()));
  }
  if (type) {
    properties = properties.filter((p) => p.type === type);
  }
  if (featured) {
    properties = properties.filter((p) => p.isFeatured);
  }

  // Calculate center based on properties with coordinates
  const propertiesWithCoords = properties.filter(p => p.lat && p.lng);
  let center: [number, number] | undefined = undefined;
  
  if (propertiesWithCoords.length > 0) {
    const sumLat = propertiesWithCoords.reduce((sum, p) => sum + (p.lat || 0), 0);
    const sumLng = propertiesWithCoords.reduce((sum, p) => sum + (p.lng || 0), 0);
    center = [sumLat / propertiesWithCoords.length, sumLng / propertiesWithCoords.length];
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Cari Properti</h1>
        
        {/* Search Bar */}
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
          <form className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="location"
                defaultValue={location}
                placeholder="Lokasi, kota, atau area..."
                className="w-full bg-transparent text-gray-900 placeholder-gray-500 outline-none"
              />
            </div>
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
              <HomeIcon className="h-5 w-5 text-gray-400" />
              <select name="type" defaultValue={type} className="w-full bg-transparent text-gray-900 outline-none">
                <option value="">Semua Tipe</option>
                <option value="Rumah">Rumah</option>
                <option value="Apartemen">Apartemen</option>
                <option value="Tanah">Tanah</option>
                <option value="Ruko">Ruko</option>
                <option value="Vila">Vila</option>
              </select>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              <Search className="h-5 w-5" />
              <span>Cari</span>
            </button>
          </form>
        </div>
      </div>

      <div className="mb-12">
        <MapWrapper properties={properties} center={center} zoom={center ? 10 : 5} className="h-[400px] w-full rounded-2xl z-0 shadow-sm ring-1 ring-gray-200 overflow-hidden" />
      </div>

      {properties.length === 0 ? (
        <div className="py-24 text-center">
          <h3 className="text-xl font-medium text-gray-900">Tidak ada properti yang ditemukan</h3>
          <p className="mt-2 text-gray-500">Coba sesuaikan filter pencarian Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
