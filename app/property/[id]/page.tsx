import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Bed, Bath, Square, Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';
import { getProperty } from '@/lib/db';
import MapWrapper from '@/components/MapWrapper';

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(dateString));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/properties" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Pencarian
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Column: Images & Details */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="mb-8 overflow-hidden rounded-3xl bg-gray-100">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={property.images[0] || 'https://picsum.photos/seed/placeholder/1200/800'}
                alt={property.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute left-6 top-6 rounded-full bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                {property.type}
              </div>
            </div>
            {property.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4 p-4">
                {property.images.slice(1, 4).map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image src={img} alt={`${property.title} - Image ${idx + 2}`} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Property Info */}
          <div>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{property.title}</h1>
                <div className="flex items-center gap-2 text-lg text-gray-600">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">
                {formatPrice(property.price)}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {property.bedrooms !== undefined && (
                <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-50 p-4 text-indigo-900">
                  <Bed className="mb-2 h-8 w-8 text-indigo-600" />
                  <span className="text-2xl font-bold">{property.bedrooms}</span>
                  <span className="text-sm font-medium">Kamar Tidur</span>
                </div>
              )}
              {property.bathrooms !== undefined && (
                <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-50 p-4 text-indigo-900">
                  <Bath className="mb-2 h-8 w-8 text-indigo-600" />
                  <span className="text-2xl font-bold">{property.bathrooms}</span>
                  <span className="text-sm font-medium">Kamar Mandi</span>
                </div>
              )}
              <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-50 p-4 text-indigo-900">
                <Square className="mb-2 h-8 w-8 text-indigo-600" />
                <span className="text-2xl font-bold">{property.area}</span>
                <span className="text-sm font-medium">Luas (m&sup2;)</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-50 p-4 text-indigo-900">
                <Calendar className="mb-2 h-8 w-8 text-indigo-600" />
                <span className="text-lg font-bold">{formatDate(property.createdAt)}</span>
                <span className="text-sm font-medium">Terdaftar</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Deskripsi Properti</h2>
              <div className="prose prose-lg prose-indigo text-gray-600">
                {property.description.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Map */}
            {property.lat && property.lng && (
              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Lokasi Properti</h2>
                <MapWrapper properties={[property]} className="h-[300px] w-full rounded-2xl z-0 shadow-sm ring-1 ring-gray-200 overflow-hidden" />
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Tertarik?</h3>
            <p className="mb-6 text-gray-600">Hubungi agen kami untuk informasi lebih lanjut atau jadwalkan kunjungan.</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input type="text" id="name" className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">Nomor Telepon / WhatsApp</label>
                <input type="tel" id="phone" className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" placeholder="0812..." />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">Pesan</label>
                <textarea id="message" rows={4} className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" defaultValue={`Halo, saya tertarik dengan properti ${property.title} yang berlokasi di ${property.location}. Mohon informasi lebih lanjut.`}></textarea>
              </div>
              <button type="button" className="w-full rounded-xl bg-indigo-600 px-4 py-4 font-bold text-white transition-colors hover:bg-indigo-700">
                Kirim Pesan
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Kami akan membalas dalam waktu 24 jam.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
