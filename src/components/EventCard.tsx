import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/lib/content';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link href={`/events/${event.slug}`}>
      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
        <Image src={event.ImagePath} alt={event.Title} width={400} height={250} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-primary">{event.Title}</h3>
          <p className="text-foreground mb-2">{event.Description}</p>
          <p className="text-foreground">{event.City}</p>
          <p className="text-foreground">{event.Date} at {event.Hour}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;