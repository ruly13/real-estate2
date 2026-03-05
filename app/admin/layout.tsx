import Link from 'next/link';
import { LayoutDashboard, PlusCircle, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        <div className="flex h-16 items-center justify-center border-b border-gray-800">
          <span className="text-xl font-bold tracking-tight">Admin Panel</span>
        </div>
        <nav className="mt-6 flex flex-col gap-2 px-4">
          <Link href="/admin" className="flex items-center gap-3 rounded-lg bg-gray-800 px-4 py-3 text-sm font-medium text-white hover:bg-gray-700">
            <LayoutDashboard className="h-5 w-5 text-gray-400" />
            Dashboard
          </Link>
          <Link href="/admin/add" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
            <PlusCircle className="h-5 w-5 text-gray-400" />
            Tambah Properti
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
            <Settings className="h-5 w-5 text-gray-400" />
            Pengaturan
          </Link>
          <div className="mt-auto pt-10">
            <Link href="/" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
              <LogOut className="h-5 w-5 text-gray-400" />
              Kembali ke Web
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
