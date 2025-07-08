import EventDetailsClient from '@/components/EventDetailsClient'
import { getEventBySlug, getEvents } from '@/lib/content'
import { notFound } from 'next/navigation'

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const events = await getEvents('bg')
  return events.map((event) => ({ slug: event.slug }))
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug, 'bg');
  if (!event) {
    return notFound();
  }
  return <EventDetailsClient event={event} />;
}
