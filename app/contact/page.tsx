import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Hubungi Kami</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-500">
          Tim Indah Properti siap membantu Anda menemukan properti terbaik.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-8 rounded-3xl bg-indigo-600 p-8 text-white shadow-xl sm:p-12">
          <h2 className="text-3xl font-bold">Informasi Kontak</h2>
          <p className="text-indigo-100">
            Jangan ragu untuk menghubungi kami melalui form di samping atau melalui detail kontak di bawah ini.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-indigo-200" />
              <div>
                <h3 className="font-semibold">Alamat Kantor</h3>
                <p className="mt-1 text-indigo-100">Jl. Jend. Sudirman Kav. 52-53<br />Jakarta Selatan 12190<br />Indonesia</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-indigo-200" />
              <div>
                <h3 className="font-semibold">Telepon</h3>
                <p className="mt-1 text-indigo-100">+62 21 1234 5678</p>
                <p className="text-indigo-100">+62 812 3456 7890 (WhatsApp)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-6 w-6 shrink-0 text-indigo-200" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-indigo-100">info@indahproperti.co.id</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-6 w-6 shrink-0 text-indigo-200" />
              <div>
                <h3 className="font-semibold">Jam Operasional</h3>
                <p className="mt-1 text-indigo-100">Senin - Jumat: 09:00 - 18:00</p>
                <p className="text-indigo-100">Sabtu: 09:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 sm:p-12">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Kirim Pesan</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-900">Nama Depan</label>
                <input type="text" id="firstName" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Budi" />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-900">Nama Belakang</label>
                <input type="text" id="lastName" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Santoso" />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">Email</label>
              <input type="email" id="email" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="budi@example.com" />
            </div>
            
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-900">Subjek</label>
              <input type="text" id="subject" className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Pertanyaan tentang properti..." />
            </div>
            
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">Pesan</label>
              <textarea id="message" rows={6} className="block w-full rounded-xl border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Tulis pesan Anda di sini..."></textarea>
            </div>
            
            <button type="button" className="w-full rounded-xl bg-indigo-600 px-8 py-4 font-bold text-white transition-colors hover:bg-indigo-700">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
