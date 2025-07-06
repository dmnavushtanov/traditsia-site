'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function HomePage() {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/gerb.jpg"
              alt="Traditsia Logo"
              width={50}
              height={50}
              className="h-12 w-12"
            />
            <span className="text-xl font-bold">
              {t('organizationName')}
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="space-x-6">
              {[
                { key: 'home', href: '' },
                { key: 'gallery', href: 'gallery' },
                { key: 'events', href: 'events' },
                { key: 'about', href: 'about' },
                { key: 'contact', href: 'contact' }
              ].map((item) => (
                <Link
                  key={item.key}
                  href={`/${item.href}`}
                  className="hover:text-gray-600"
                >
                  {t(item.key as any)}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-64 md:h-96">
        <Image
          src="/images/site-banner.png"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </section>

      {/* Upcoming Events */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">{t('upcomingEvents')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
              <Image
                src={`/images/event-${i}-placeholder.jpg`}
                alt={`Event ${i}`}
                width={400}
                height={250}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{t('eventTitle')} {i}</h3>
                <p className="text-gray-600 mt-2">{t('eventDate')}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Announcements & News */}
        <section className="mt-12 bg-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{t('announcementTitle')}</h3>
          <p className="text-gray-700">{t('announcementText')}</p>
          <p className="text-gray-700 mt-4">{t('secondaryAnnouncement')}</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
          <div>
            <p>{t('contactEmail')}</p>
            <p>{t('contactPhone')}</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social Icon Placeholders */}
            <span>FB</span>
            <span>TW</span>
            <span>IG</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 