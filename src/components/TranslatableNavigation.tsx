"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function TranslatableNavigation() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '' },
    { key: 'gallery', href: 'gallery' },
    { key: 'events', href: 'events' },
    { key: 'about', href: 'about' },
    { key: 'contact', href: 'contact' }
  ];

  return (
    <header className="bg-[var(--background-soft-cream)] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center space-x-4 cursor-pointer">
          <Image
            src="/images/gerb.jpg"
            alt="Traditsia Logo"
            width={50}
            height={50}
            className="h-12 w-12"
          />
          <span className="text-xl font-bold text-[var(--primary-accent-green)]">
            {t('organizationName')}
          </span>
        </Link>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[var(--primary-accent-green)] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${item.href}`}
                className="text-[var(--text-charcoal)] hover:text-[var(--primary-accent-green)]"
              >
                {t(item.key as any)}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--background-soft-cream)] shadow-lg py-2">
          <nav className="flex flex-col items-center space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${item.href}`}
                className="block w-full text-center py-2 text-[var(--text-charcoal)] hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)} // Close menu on item click
              >
                {t(item.key as any)}
              </Link>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}