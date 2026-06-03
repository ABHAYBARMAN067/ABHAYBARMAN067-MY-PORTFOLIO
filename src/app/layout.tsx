import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Abhay Barman | MERN Stack Developer',
  description:
    'Portfolio of Abhay Barman - MERN stack developer building performant, scalable web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} dark`}>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
