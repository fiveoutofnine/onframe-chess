import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import clsx from 'clsx';

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------

const inter = Inter({ subsets: ['latin'] });

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
};

export const viewport: Viewport = {
  themeColor: '#fcfcfc',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// -----------------------------------------------------------------------------
// Layout
// -----------------------------------------------------------------------------

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ background: 'var(--gray1)' }}>
      <body className={clsx(inter.className, 'relative min-h-screen w-full')}>{children}</body>
    </html>
  );
}
