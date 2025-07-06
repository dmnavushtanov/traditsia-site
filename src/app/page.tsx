import { getEvents, Event } from '@/lib/content';
import HomePageClient from '@/components/HomePageClient';
import { Language } from '@/lib/translations';

export default async function HomePage({ params: { lang } }: { params: { lang: Language } }) {
  const upcomingEvents = await getEvents(lang);

  // Take the first 3 upcoming events, which are already sorted by date
  const recentEvents = upcomingEvents.slice(0, 3);

  return (
    <HomePageClient recentEvents={recentEvents} />
  );
}