import { getEventBySlug, getEvents } from '@/lib/content';
import EventDetailsClient from '@/components/EventDetailsClient';
import { Language } from '@/lib/translations';

export async function generateStaticParams() {
  const locales: Language[] = ['bg', 'en'];
  const allParams = [];

  for (const lang of locales) {
    const events = await getEvents(lang);
    const params = events.map((event) => ({
      slug: event.slug,
      lang: lang,
    }));
    allParams.push(...params);
  }

  return allParams;
}

export default async function EventPage({ params: awaitedParams }: { params: Promise<{ slug: string, lang: Language }> }) {
  const { slug, lang } = await awaitedParams;
  const decodedSlug = decodeURIComponent(slug);
  const event = await getEventBySlug(decodedSlug, lang);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <EventDetailsClient event={event} />
  );
}