import { getEvents, Event } from '@/lib/content';
import HomePageClient from '@/components/HomePageClient';

export default async function HomePage() {
  const upcomingEventsBg = await getEvents('bg');
  const upcomingEventsEn = await getEvents('en');

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const filterUpcoming = (events: Event[]) => events.filter(event => {
    if (!event.Date) return true;
    const eventDate = new Date(event.Date);
    if (isNaN(eventDate.getTime())) return true;
    return eventDate >= now;
  });

  const recentEventsBg = filterUpcoming(upcomingEventsBg).slice(0, 3);
  const recentEventsEn = filterUpcoming(upcomingEventsEn).slice(0, 3);

  return (
    <HomePageClient 
      recentEventsBg={recentEventsBg} 
      recentEventsEn={recentEventsEn} 
    />
  );
}