"use client";

import { useState, useEffect, useMemo } from 'react';
import EventCard from '@/components/EventCard';
import dynamic from 'next/dynamic';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const GoogleMap = dynamic(() => import('@/components/GoogleMap'), { ssr: false });
import { Event } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';

interface EventsPageClientProps {
  initialEvents: Event[];
}

export default function EventsPageClient({ initialEvents }: EventsPageClientProps) {
  const { t } = useLanguage();
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(initialEvents);
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    let currentEvents = initialEvents;

    if (selectedMonth !== 'all') {
      currentEvents = initialEvents.filter(event => {
        const eventDate = new Date(event.Date);
        return (eventDate.getMonth() + 1).toString() === selectedMonth;
      });
    }

    setFilteredEvents(currentEvents);
  }, [initialEvents, selectedMonth]);

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
  };

  const markers = filteredEvents.map(event => ({
    lat: event.Latitude,
    lng: event.Longitude,
    title: event.Title,
    description: event.Description,
    date: event.Date,
    hour: event.Hour,
    city: event.City,
  }));

  const monthOptions = [
    { value: 'all', label: t('all') },
    { value: '1', label: t('january') },
    { value: '2', label: t('february') },
    { value: '3', label: t('march') },
    { value: '4', label: t('april') },
    { value: '5', label: t('may') },
    { value: '6', label: t('june') },
    { value: '7', label: t('july') },
    { value: '8', label: t('august') },
    { value: '9', label: t('september') },
    { value: '10', label: t('october') },
    { value: '11', label: t('november') },
    { value: '12', label: t('december') },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">{t('events')}</h1>
      <div className="mb-4">
        <label htmlFor="month-select" className="mr-2">{t('filterByMonth')}</label>
        <Select value={selectedMonth} onValueChange={handleMonthChange}>
          <SelectTrigger id="month-select" className="w-[180px]">
            <SelectValue placeholder="Select a month" />
          </SelectTrigger>
          <SelectContent>
            {monthOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mb-8">
        <GoogleMap markers={markers} zoom={8} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, index) => {
          const eventDate = new Date(event.Date);
          const now = new Date();
          now.setHours(0, 0, 0, 0);
          const isPast = eventDate < now;
          return (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={isPast ? "opacity-30 grayscale pointer-events-none" : ""}
            >
              <EventCard event={event} isPast={isPast} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}