
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Event } from '@/lib/content';

interface HomePageClientProps {
  recentEvents: Event[];
}

export default function HomePageClient({ recentEvents }: HomePageClientProps) {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen text-[var(--text-charcoal)]">
      {/* Hero */}
      <section className="relative w-full h-[25vw] min-h-[150px] max-h-[300px]">
        <Image
          src="/images/site-banner.webp"
          alt="Traditsia Banner"
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </section>

      {/* Upcoming Events */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">{t('upcomingEvents')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {recentEvents.map((event) => (
            <Link key={event.slug} href={`/events/${event.slug}`}>
              <div className="bg-[var(--background-soft-cream)] rounded-lg overflow-hidden shadow cursor-pointer">
                <Image
                  src={event.ImagePath}
                  alt={event.Title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[var(--primary-accent-green)]">{event.Title}</h3>
                  <p className="text-[var(--text-charcoal)] mt-2">{event.Date} at {event.Hour}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Announcements & News */}
        <section className="mt-12 bg-[var(--secondary-accent-ochre)] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-[var(--primary-accent-green)]">{t('announcementTitle')}</h3>
          <p className="text-[var(--text-charcoal)]">{t('announcementText')}</p>
          <p className="text-[var(--text-charcoal)] mt-4">{t('secondaryAnnouncement')}</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--primary-accent-green)] text-white py-8">
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
