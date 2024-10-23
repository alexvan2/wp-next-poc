import { draftMode } from 'next/headers';
import { Inter } from 'next/font/google';

import '@/app/globals.css';

import { PreviewNotice } from '@/components/Globals/PreviewNotice/PreviewNotice';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body className={inter.className}>
        {isEnabled && <PreviewNotice />}
        <main>{children}</main>
      </body>
    </html>
  );
}
