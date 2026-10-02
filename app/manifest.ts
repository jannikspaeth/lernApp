import type { MetadataRoute } from 'next';

// Makes the app installable ("Add to Home Screen"): own icon, opens full screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lern App',
    short_name: 'Lernen',
    description: 'History, geography, art, literature and languages for German speakers',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#F9FAFB',
    theme_color: '#B91C1C',
    lang: 'de',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
