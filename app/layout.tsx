import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { getPortfolioData } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

const { siteInfo } = getPortfolioData();

export const metadata: Metadata = {
  title: `${siteInfo.name} — ${siteInfo.title}`,
  description: siteInfo.hero,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
