import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import OfflineSupport from '@/components/OfflineSupport';

export const metadata: Metadata = {
  title: 'Lern App',
  description: 'History, geography, art, literature and languages for German speakers',
  // Installed on an iPhone home screen: full screen, own name under the icon.
  appleWebApp: { capable: true, title: 'Lernen', statusBarStyle: 'default' },
};

export const viewport: Viewport = {
  themeColor: '#B91C1C',
  viewportFit: 'cover', // lets env(safe-area-inset-*) report the notch / home bar
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full">
        <Navigation />
        <OfflineSupport />
        {children}
      </body>
    </html>
  );
}
