import { getEvents, Event } from '@/lib/content';
import HomePageClient from '@/components/HomePageClient';

export default async function HomePage() {
  const upcomingEvents = await getEvents('bg');

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const filteredUpcomingEvents = upcomingEvents.filter(event => {
    if (!event.Date) return true;
    const eventDate = new Date(event.Date);
    if (isNaN(eventDate.getTime())) return true;
    return eventDate >= now;
  });

  // Take the first 3 upcoming events
  const recentEvents = filteredUpcomingEvents.slice(0, 3);

  return (
    <HomePageClient recentEvents={recentEvents} />
  );
}