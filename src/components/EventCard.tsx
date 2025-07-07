import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/lib/content';

interface EventCardProps {
  event: Event;
}

const typeBadges: Record<string, { label: string; className: string }> = {
  country_wide: {
    label: 'Държавно честване',
    className: 'bg-[var(--primary-accent-green)] text-white',
  },
  local_event: {
    label: 'Възстановка',
    className: 'bg-[var(--secondary-accent-ochre)] text-white',
  },
  national_event: {
    label: 'Национална Възстановка',
    className: 'bg-yellow-600 text-white',
  },
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
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