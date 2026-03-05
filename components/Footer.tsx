import Link from 'next/link';
import { Building, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold tracking-tight text-white">
                Indah<span className="text-indigo-500">Properti</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Platform real estate terpercaya di Indonesia. Temukan properti impian Anda dengan mudah dan aman.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/indah_properti/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Beranda</Link></li>
              <li><Link href="/properties" className="hover:text-white">Semua Properti</Link></li>
              <li><Link href="/about" className="hover:text-white">Tentang Kami</Link></li>
              <li><Link href="/contact" className="hover:text-white">Hubungi Kami</Link></li>
              <li><Link href="/admin" className="hover:text-white">Admin Panel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Kategori</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/properties?type=Rumah" className="hover:text-white">Rumah</Link></li>
              <li><Link href="/properties?type=Apartemen" className="hover:text-white">Apartemen</Link></li>
              <li><Link href="/properties?type=Tanah" className="hover:text-white">Tanah</Link></li>
              <li><Link href="/properties?type=Ruko" className="hover:text-white">Ruko</Link></li>
              <li><Link href="/properties?type=Vila" className="hover:text-white">Vila</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Kontak</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-indigo-500" />
                <span>Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-indigo-500" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-indigo-500" />
                <span>info@indahproperti.co.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Indah Properti. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
