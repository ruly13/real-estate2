import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { seedDatabase } from '@/lib/seed';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Indah Properti | Real Estate Indonesia',
  description: 'Platform real estate profesional untuk pasar Indonesia, menampilkan properti terbaik dengan fitur pencarian dan manajemen konten yang mudah.',
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  await seedDatabase();
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900 antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
