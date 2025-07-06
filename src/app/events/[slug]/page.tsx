import { getEventBySlug, getEvents } from '@/lib/content';
import EventDetailsClient from '@/components/EventDetailsClient';

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage(props: { params: { slug: string } }) {
  const event = await getEventBySlug(props.params.slug);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <EventDetailsClient event={event} />
  );
}