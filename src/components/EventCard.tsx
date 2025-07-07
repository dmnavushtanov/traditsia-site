import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/lib/content';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link href={`/events/${event.slug}`} className="p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col">
      {event.ImagePath && (
        <div className="w-full h-48 overflow-hidden rounded-md mb-4">
          <Image
            src={event.ImagePath || '/images/events/placeholder.jpg'}
            alt={event.Title}
            width={400}
            height={250}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      )}
      <h3 className="font-semibold h-12 line-clamp-2">{event.Title}</h3>
      <p className="mt-1 text-sm text-gray-600">{event.Date}</p>
    </Link>
  );
};

export default EventCard;