import EventDetailsClient from '@/components/EventDetailsClient'
import { getEvents, Event } from '@/lib/content'
import { notFound } from 'next/navigation'
import Script from 'next/script'

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const eventsBg = await getEvents('bg')
  const eventsEn = await getEvents('en')
  
  // We need to generate paths for both BG and EN slugs
  const bgSlugs = eventsBg.map((event) => ({ slug: event.slug }))
  const enSlugs = eventsEn.map((event) => ({ slug: event.slug }))
  
  return [...bgSlugs, ...enSlugs]
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const eventsBg = await getEvents('bg');
  const eventsEn = await getEvents('en');

  // Find the event in either language by slug
  const eventBgMatch = eventsBg.find(e => e.slug === slug);
  const eventEnMatch = eventsEn.find(e => e.slug === slug);

  let eventBg: Event | undefined;
  let eventEn: Event | undefined;

  if (eventBgMatch) {
    eventBg = eventBgMatch;
    // Find corresponding EN version by ID
    eventEn = eventsEn.find(e => e.EventID === eventBgMatch.EventID);
  } else if (eventEnMatch) {
    eventEn = eventEnMatch;
    // Find corresponding BG version by ID
    eventBg = eventsBg.find(e => e.EventID === eventEnMatch.EventID);
  }

  if (!eventBg || !eventEn) {
    return notFound();
  }

  const schemaEvent = eventBgMatch ?? eventEnMatch ?? eventBg;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: schemaEvent.Title,
    startDate: schemaEvent.Date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: schemaEvent.City,
    },
    organizer: {
      "@type": "Organization",
      name: "НД Традиция",
      url: "https://nd-traditsiya.com",
    },
  };

  return (
    <>
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <EventDetailsClient eventBg={eventBg} eventEn={eventEn} />
    </>
  );
}
