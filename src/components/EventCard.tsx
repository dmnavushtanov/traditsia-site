import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Event } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';

interface EventCardProps {
  event: Event;
  isPast?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isPast }) => {
  const { t } = useLanguage();

  const typeBadges: Record<string, { label: string; className: string }> = {
    country_wide: {
      label: t('countryWideBadge'),
      className:
        'bg-blue-600 text-white shadow-[0_0_4px] shadow-blue-600/80',
    },
    local_event: {
      label: t('localEventBadge'),
      className:
        'bg-green-600 text-white shadow-[0_0_4px] shadow-green-600/80',
    },
    national_event: {
      label: t('nationalEventBadge'),
      className:
        'bg-yellow-600 text-white shadow-[0_0_4px] shadow-yellow-600/80',
    },
  };

  const badge = !isPast ? typeBadges[event.Type] : undefined;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={`/events/${event.slug}`}
        className="p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col"
      >
      {event.ImagePath && (
        <div className="relative w-full h-48 overflow-hidden rounded-md mb-4">
          {isPast ? (
            <span
              className="bg-gray-600 text-white shadow-[0_0_4px] shadow-gray-600/80 absolute top-2 left-2 z-10 px-2 py-1 text-xs font-semibold rounded"
            >
              {t('pastEvent')}
            </span>
          ) : (
            badge && (
              <span
                className={`${badge.className} absolute top-2 left-2 z-10 px-2 py-1 text-xs font-semibold rounded`}
              >
                {badge.label}
              </span>
            )
          )}
          <Image
            src={event.ImagePath || '/images/events/placeholder.jpg'}
            alt={event.Title}
            width={400}
            height={250}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      )}
      <h3 className="font-semibold h-12 line-clamp-2">{event.Title}</h3>
        <p className="mt-1 text-sm text-gray-600">{event.Date}</p>
      </Link>
    </motion.div>
  );
};

export default EventCard;