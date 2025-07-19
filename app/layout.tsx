import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { NextAuthProvider } from '@/components/auth/Provider';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'Finance Forecast',
  description: 'Track and forecast your financial future',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geist.variable} font-sans antialiased h-full`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
