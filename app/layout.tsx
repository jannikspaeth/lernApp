import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import OfflineSupport from '@/components/OfflineSupport';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'Lern App',
  description: 'History, geography, art, literature and languages for German speakers',
  // Installed on an iPhone home screen: full screen, own name under the icon.
  appleWebApp: { capable: true, title: 'Lernen', statusBarStyle: 'default' },
};

export const viewport: Viewport = {
  themeColor: '#FAFAFA',
  viewportFit: 'cover', // lets env(safe-area-inset-*) report the notch / home bar
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`h-full ${geist.variable}`}>
      <body className="min-h-full">
        <Navigation />
        <OfflineSupport />
        {children}
      </body>
    </html>
  );
}
