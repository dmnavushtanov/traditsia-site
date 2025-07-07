import { getEvents, Event } from '@/lib/content';
import HomePageClient from '@/components/HomePageClient';
import { Language } from '@/lib/translations';

export default async function HomePage({ params: { lang } }: { params: { lang: Language } }) {
  const upcomingEvents = await getEvents(lang);

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const filteredUpcomingEvents = upcomingEvents.filter(event => new Date(event.Date) >= now);

  // Take the first 3 upcoming events
  const recentEvents = filteredUpcomingEvents.slice(0, 3);

  return (
    <HomePageClient recentEvents={recentEvents} />
  );
}