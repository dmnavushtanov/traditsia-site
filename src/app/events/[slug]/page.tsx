import { getEventBySlug, getEvents } from '@/lib/content';
import EventDetailsClient from '@/components/EventDetailsClient';
interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const events = await getEvents('bg');
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const event = await getEventBySlug(decodedSlug, 'bg');

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <EventDetailsClient event={event} />
  );
}
