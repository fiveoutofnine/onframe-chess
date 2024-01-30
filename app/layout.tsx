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
  return <Fragment>{children}</Fragment>;
}
