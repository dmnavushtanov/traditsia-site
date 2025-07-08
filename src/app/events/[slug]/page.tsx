import { getEventBySlug, getEvents } from '@/lib/content'
import EventDetailsClient from '@/components/EventDetailsClient'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const events = await getEvents('bg')
  return events.map((event) => ({ slug: event.slug }))
}

export default async function EventPage({ params }: PageProps) {
  const decodedSlug = decodeURIComponent(params.slug)
  const event = await getEventBySlug(decodedSlug, 'bg')

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <EventDetailsClient event={event} />
  );
}
