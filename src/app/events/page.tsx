
import { getEvents } from '@/lib/content';
import EventsPageClient from '@/components/EventsPageClient';

export default async function EventsPage() {
  const events = await getEvents('bg');

  return (
    <EventsPageClient initialEvents={events} />
  );
}
