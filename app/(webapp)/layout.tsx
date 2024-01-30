import { Inter } from 'next/font/google';

import '../globals.css';
import clsx from 'clsx';

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------

const inter = Inter({ subsets: ['latin'] });

// -----------------------------------------------------------------------------
// Layout
// -----------------------------------------------------------------------------

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ background: 'var(--gray1)' }}>
      <body className={clsx(inter.className, 'min-h-screen w-full relative flex flex-col')}>
        {children}
      </body>
    </html>
  );
}
