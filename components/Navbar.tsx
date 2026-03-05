import Link from 'next/link';
import { Home, Search, Building, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Building className="h-8 w-8 text-indigo-600" />
          <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
            Indah<span className="text-indigo-600">Properti</span>
          </Link>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Beranda</Link>
          <Link href="/properties" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Properti</Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Tentang Kami</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Kontak</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/admin" className="hidden rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 md:block">
            Admin Panel
          </Link>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}
