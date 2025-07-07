import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/lib/content';

interface EventCardProps {
  event: Event;
  isPast?: boolean;
}

const typeBadges: Record<string, { label: string; className: string }> = {
  country_wide: {
    label: 'Държавно честване',
    className: 'bg-blue-600 text-white shadow-md shadow-blue-600/50',
  },
  local_event: {
    label: 'Възстановка',
    className: 'bg-green-600 text-white shadow-md shadow-green-600/50',
  },
  national_event: {
    label: 'Национална Възстановка',
    className: 'bg-yellow-600 text-white shadow-md shadow-yellow-600/50',
  },
};

const EventCard: React.FC<EventCardProps> = ({ event, isPast }) => {
  const badge = typeBadges[event.Type];

  return (
    <Link
      href={`/events/${event.slug}`}
      className="p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col"
    >
      {event.ImagePath && (
        <div className="relative w-full h-48 overflow-hidden rounded-md mb-4">
          {badge && (
            <span
              className={`${badge.className} absolute top-2 left-2 z-10 px-2 py-1 text-xs font-semibold rounded`}
            >
              {badge.label}
            </span>
          )}
          {isPast && (
            <span
              className="bg-gray-600 text-white shadow-md shadow-gray-600/50 absolute top-2 right-2 z-10 px-2 py-1 text-xs font-semibold rounded"
            >
              Минало Събитие
            </span>
          )}
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