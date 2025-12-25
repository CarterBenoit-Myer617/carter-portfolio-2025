'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getPortfolioData } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();
  const { siteInfo } = getPortfolioData();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/studio', label: siteInfo.navigation.work },
    { href: '/about', label: siteInfo.navigation.about },
    { href: '/studio/process', label: 'Process' },
    { href: '/contact', label: siteInfo.navigation.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            {siteInfo.name}
          </Link>
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wider font-semibold transition-colors ${
                  pathname === link.href
                    ? 'text-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
