
import { getEvents } from '@/lib/content';
import EventsPageClient from '@/components/EventsPageClient';
import { Language } from '@/lib/translations';

export default async function EventsPage({ params: { lang } }: { params: { lang: Language } }) {
  const events = await getEvents(lang);

  return (
    <EventsPageClient initialEvents={events} />
  );
}
