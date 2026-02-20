
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
  recentEventsBg: Event[];
  recentEventsEn: Event[];
}

export default function HomePageClient({ recentEventsBg, recentEventsEn }: HomePageClientProps) {
  const { t, language } = useLanguage();
  
  const recentEvents = language === 'en' ? recentEventsEn : recentEventsBg;
  
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

      {/* Parchment Banner */}
      <section className="relative w-full mt-2 h-[8.4vw] min-h-[28px] sm:h-[7.5vw] sm:min-h-[40px] max-h-[90px] overflow-visible shadow-inner">
        <Image
          src={`${basePath}/images/parchment-scroll-webp.webp`}
          alt="Parchment Scroll"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-between px-3 sm:px-6">
          <div className="text-left text-[clamp(12px,2.2vw,36px)] leading-tight text-[var(--text-charcoal)] font-cinzel whitespace-nowrap pr-3">
            <span className="font-extrabold text-[1.3em] sm:text-[1.5em]">150</span>
            <span className="font-semibold"> години Априлско въстание (1876~2026)</span>
          </div>
          <Image
            src={`${basePath}/images/Red stamp_cropped-webp.webp`}
            alt="Red Wax Stamp"
            width={330}
            height={330}
            className="relative w-[27vw] max-w-[240px] -translate-y-[10%] rotate-[30deg] shrink-0 -translate-x-[10%] sm:translate-x-0"
            sizes="(max-width: 640px) 30vw, 240px"
          />
        </div>
      </section>

      {/* Upcoming Events */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">{t('upcomingEvents')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {recentEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </main>

      <section className="px-6 pb-6 text-center text-sm sm:text-base md:text-lg font-semibold text-[var(--text-charcoal)]">
        {t('newAnnouncement')}
      </section>

      {/* Footer */}
      <footer className="bg-[var(--primary-accent-green)] text-white py-8">
        <div className="container mx-auto px-6">
          {/* Footer content removed */}
        </div>
      </footer>
    </div>
  );
}


