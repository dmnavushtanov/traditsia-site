
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Event } from '@/lib/content';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\//, '')}`
  : '';

import EventCard from './EventCard';

interface HomePageClientProps {
  recentEvents: Event[];
}

export default function HomePageClient({ recentEvents }: HomePageClientProps) {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen text-[var(--text-charcoal)]">
      {/* Hero */}
      <section className="relative w-full h-[28vw] min-h-[100px] sm:h-[25vw] sm:min-h-[150px] max-h-[300px]">
        <Image
          src={`${basePath}/images/site-banner.webp`}
          alt="Traditsia Banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>

      {/* Upcoming Events */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">{t('upcomingEvents')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {recentEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>

        {/* Announcements & News */}
        <section className="mt-12 bg-[var(--secondary-accent-ochre)] p-6 rounded-lg">
          <p className="font-caveat text-4xl font-bold text-[var(--text-charcoal)]">
            {t('newAnnouncement')}
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--primary-accent-green)] text-white py-8">
        <div className="container mx-auto px-6">
          {/* Footer content removed */}
        </div>
      </footer>
    </div>
  );
}
