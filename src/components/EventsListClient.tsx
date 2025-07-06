
"use client";

import { useState, useEffect } from 'react';
import EventCard from '@/components/EventCard';
import { Event } from '@/lib/content';

interface EventsListClientProps {
  initialEvents: Event[];
}

export default function EventsListClient({ initialEvents }: EventsListClientProps) {
  const [allEvents, setAllEvents] = useState<Event[]>(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(initialEvents);
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  useEffect(() => {
    setFilteredEvents(allEvents);
  }, [allEvents]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value;
    setSelectedMonth(month);
    if (month === 'all') {
      setFilteredEvents(allEvents);
    } else {
      const filtered = allEvents.filter(event => {
        const eventMonth = new Date(event.Date).getMonth() + 1;
        return eventMonth.toString() === month;
      });
      setFilteredEvents(filtered);
    }
  };

  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-8">Events</h1>
      <div className="mb-4">
        <label htmlFor="month-select" className="mr-2">Filter by month:</label>
        <select id="month-select" value={selectedMonth} onChange={handleMonthChange} className="border rounded p-2">
          <option value="all">All</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
