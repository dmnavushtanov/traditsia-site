import { getEvents, Event } from '@/lib/content';
import HomePageClient from '@/components/HomePageClient';

export default async function HomePage() {
  const upcomingEvents = await getEvents();

  // Take the first 3 upcoming events, which are already sorted by date
  const recentEvents = upcomingEvents.slice(0, 3);

  return (
    <HomePageClient recentEvents={recentEvents} />
  );
}