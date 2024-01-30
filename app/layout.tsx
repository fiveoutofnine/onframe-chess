import type { Metadata, Viewport } from 'next';
import { Fragment } from 'react';

import './globals.css';

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: {
    template: '%s | Onframe Chess',
    default: 'Onframe Chess',
  },
  description: 'Fully featured chess game with Farcaster Frames.',
  keywords: ['farcaster', 'frame', 'ethereum', 'chess'],
  manifest: '/manifest.json',
  openGraph: {
    title: 'Onframe Chess',
    description: 'Fully featured chess game with Farcaster Frames.',
    siteName: 'onframe-chess',
    url: 'https://onframe-chess.vercel.app',
    locale: 'en_US',
    images: ['https://onframe-chess.vercel.app/static/og/home.png'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@fiveoutofnine',
    images: ['https://onframe-chess.vercel.app/static/og/home.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#141414',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// -----------------------------------------------------------------------------
// Layout
// -----------------------------------------------------------------------------

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Fragment>{children}</Fragment>;
}
