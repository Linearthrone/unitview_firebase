import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Metadata } from 'next';
import { Navigation } from '@/components/shared/navigation';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UnitView',
  description: 'UnitView Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gray-50 pt-4 pb-12">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}