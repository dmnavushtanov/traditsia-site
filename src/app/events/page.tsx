
import { getEvents } from '@/lib/content';
import EventsPageClient from '@/components/EventsPageClient';

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <EventsPageClient initialEvents={events} />
  );
}
