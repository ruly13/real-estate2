import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Home as HomeIcon } from 'lucide-react';
import { getProperties } from '@/lib/db';
import PropertyCard from '@/components/PropertyCard';

export default async function Home() {
  const properties = await getProperties();
  const featuredProperties = properties.filter((p) => p.isFeatured).slice(0, 6);
  const recentProperties = properties.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gray-900 px-4 py-32 text-center sm:px-6 lg:px-8">
        <Image
          src="https://picsum.photos/seed/jakarta/1920/1080"
          alt="Jakarta Skyline"
          fill
          className="object-cover opacity-40"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Temukan Properti Impian Anda di <span className="text-indigo-400">Indonesia</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Jelajahi ribuan pilihan rumah, apartemen, dan tanah terbaik yang sesuai dengan gaya hidup dan anggaran Anda.
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-2 shadow-xl sm:p-4">
            <form action="/properties" className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  placeholder="Lokasi, kota, atau area..."
                  className="w-full bg-transparent text-gray-900 placeholder-gray-500 outline-none"
                />
              </div>
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
                <HomeIcon className="h-5 w-5 text-gray-400" />
                <select name="type" className="w-full bg-transparent text-gray-900 outline-none">
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
      </section>

      {/* Featured Properties */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Properti Unggulan</h2>
            <p className="mt-4 text-lg text-gray-600">Pilihan properti terbaik yang direkomendasikan untuk Anda.</p>
          </div>
          <Link href="/properties?featured=true" className="hidden font-semibold text-indigo-600 hover:text-indigo-700 sm:block">
            Lihat Semua &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/properties?featured=true" className="font-semibold text-indigo-600 hover:text-indigo-700">
            Lihat Semua &rarr;
          </Link>
        </div>
      </section>

      {/* Recent Properties */}
      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Listing Terbaru</h2>
              <p className="mt-4 text-lg text-gray-600">Properti yang baru saja ditambahkan ke platform kami.</p>
            </div>
            <Link href="/properties" className="hidden font-semibold text-indigo-600 hover:text-indigo-700 sm:block">
              Lihat Semua &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-indigo-600 shadow-xl">
          <div className="px-6 py-16 sm:px-12 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-20">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ingin menjual properti Anda?</span>
                <span className="block text-indigo-200">Bergabunglah dengan Indah Properti.</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-6 text-indigo-100">
                Dapatkan akses ke ribuan calon pembeli potensial setiap harinya. Proses mudah, cepat, dan aman.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-transparent bg-white px-8 py-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
