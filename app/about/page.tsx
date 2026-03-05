import Image from 'next/image';
import { Building, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Tentang Indah Properti</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-500">
          Mitra terpercaya Anda dalam menemukan properti impian di seluruh Indonesia.
        </p>
      </div>

      <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Visi Kami</h2>
          <p className="mb-6 text-lg text-gray-600">
            Menjadi platform real estate digital terdepan di Indonesia yang menghubungkan pencari properti dengan hunian impian mereka secara transparan, aman, dan efisien.
          </p>
          <p className="text-lg text-gray-600">
            Kami percaya bahwa setiap orang berhak mendapatkan tempat tinggal yang nyaman. Oleh karena itu, kami terus berinovasi untuk memberikan pengalaman pencarian properti terbaik.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
          <Image
            src="https://picsum.photos/seed/office/800/600"
            alt="Kantor Indah Properti"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
            <Building className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">1000+</h3>
          <p className="text-gray-500">Properti Terdaftar</p>
        </div>
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
            <Users className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">50K+</h3>
          <p className="text-gray-500">Pengguna Aktif</p>
        </div>
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
            <Target className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">99%</h3>
          <p className="text-gray-500">Tingkat Kepuasan</p>
        </div>
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
            <Award className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">15+</h3>
          <p className="text-gray-500">Penghargaan</p>
        </div>
      </div>
    </div>
  );
}
