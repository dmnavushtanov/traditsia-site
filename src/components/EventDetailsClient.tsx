
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Event } from '@/lib/content';

import MapAccordion from './MapAccordion';

const GoogleMap = dynamic(() => import('@/components/GoogleMap'), { ssr: false });

interface EventDetailsClientProps {
  event: Event;
}

export default function EventDetailsClient({ event }: EventDetailsClientProps) {
  const { t } = useLanguage();

  const isValidCoordinates =
    typeof event.Latitude === 'number' && !isNaN(event.Latitude) &&
    typeof event.Longitude === 'number' && !isNaN(event.Longitude);

  const mapComponent = (
    <GoogleMap
      markers={isValidCoordinates ? [{
        lat: event.Latitude,
        lng: event.Longitude,
        title: event.Title,
        description: event.Description,
        date: event.Date,
        hour: event.Hour,
        city: event.City,
      }] : []}
      zoom={isValidCoordinates ? 14 : undefined}
      center={isValidCoordinates ? { lat: event.Latitude, lng: event.Longitude } : undefined}
      className="h-full w-full rounded-lg"
    />
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Image and Map */}
        <div className="space-y-8">
          {event.ImagePath && (
            <div className="w-full">
              <Image
                src={event.ImagePath || '/images/events/placeholder.jpg'}
                alt={event.Title}
                width={768}
                height={432}
                sizes="(max-width: 768px) 100vw, 768px"
                className="rounded-lg object-cover w-full h-auto"
                priority
              />
            </div>
          )}
          {/* Desktop Map */}
          <div className="h-96 w-full hidden md:block">
            {mapComponent}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="space-y-4 md:relative md:z-10 md:bg-background md:py-4 text-lg">
          {/* Mobile Map Accordion */}
          <MapAccordion>{mapComponent}</MapAccordion>

          {event.Title && (
            <div>
              <span className="font-semibold w-24 inline-block">{t('title')}:</span>
              <span>{event.Title}</span>
            </div>
          )}
          {event.Date && (
            <div>
              <span className="font-semibold w-24 inline-block">{t('date')}:</span>
              <span>{event.Date}{event.Hour && ` • ${event.Hour}`}</span>
            </div>
          )}
          {event.City && (
            <div>
              <span className="font-semibold w-24 inline-block">{t('location')}:</span>
              <span>{event.City}</span>
            </div>
          )}
          {event.Description && (
            <div>
              <span className="font-semibold w-24 inline-block align-top">{t('description')}:</span>
              <p className="leading-relaxed inline-block w-[calc(100%-7rem)]">{event.Description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
