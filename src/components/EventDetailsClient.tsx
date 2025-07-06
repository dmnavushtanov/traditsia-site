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
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-4">{event.Title}</h1>
      <p className="text-gray-600 mb-4">{event.Date} at {event.Hour} in {event.City}</p>
      <Image src={event.ImagePath} alt={event.Title} width={800} height={500} className="w-full h-96 object-cover rounded-lg mb-8" />
      <p className="text-lg mb-8">{event.Description}</p>
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
        zoom={12} // Zoom level for event location
      />
    </div>
  );
}
