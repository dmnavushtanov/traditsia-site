
import { getEvents } from '@/lib/content';
import EventsPageClient from '@/components/EventsPageClient';

export default async function EventsPage() {
  const eventsBg = await getEvents('bg');
  const eventsEn = await getEvents('en');

  return (
    <EventsPageClient eventsBg={eventsBg} eventsEn={eventsEn} />
  );
}
