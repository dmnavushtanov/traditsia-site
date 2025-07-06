'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Event } from '@/lib/content';

const GoogleMap = dynamic(() => import('@/components/GoogleMap'), { ssr: false });

interface EventDetailsClientProps {
  event: Event;
}

export default function EventDetailsClient({ event }: EventDetailsClientProps) {
  return (
    <>
      <section className="relative">
        <div className="h-48 sm:h-64 lg:h-96 overflow-hidden rounded-b-2xl shadow-lg">
          <Image
            src={event.ImagePath}
            alt={event.Title}
            layout="fill"
            objectFit="cover"
            className="brightness-90"
          />
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold drop-shadow-lg">{event.Title}</h1>
          <p className="mt-1 text-sm sm:text-base drop-shadow">{event.Date}{event.Hour && ` • ${event.Hour}`} • {event.City}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Description & Details */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold">{t('description')}</h2>
          <p className="leading-relaxed">{event.Description}</p>

          <ul className="space-y-2">
            <li><strong>{t('when')}:</strong> {event.Date}{event.Hour && ` • ${event.Hour}`}</li>
            {/* <li><strong>{t('endTime')}:</strong> {event.endTime}</li> */}
            <li><strong>{t('where')}:</strong> {event.City}</li>
            {/* <li><strong>{t('organizer')}:</strong> {event.organizer}</li> */}
          </ul>
        </div>

        {/* Right: Map + Actions */}
        <aside className="space-y-6 lg:sticky lg:top-20">
          {typeof event.Latitude === 'number' && !isNaN(event.Latitude) && typeof event.Longitude === 'number' && !isNaN(event.Longitude) && (
            <GoogleMap
              markers={[
                {
                  lat: event.Latitude,
                  lng: event.Longitude,
                  title: event.Title,
                  description: event.Description,
                  date: event.Date,
                  hour: event.Hour,
                  city: event.City,
                },
              ]}
              zoom={14} // Closer zoom level for single event location
              center={{ lat: event.Latitude, lng: event.Longitude }} // Explicitly center on the event
              className="h-64 rounded-xl shadow"
            />
          )}
        </aside>
      </div>
    </>
  );
}
