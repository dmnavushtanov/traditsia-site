
import fs from 'fs/promises';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface Event {
  Title: string;
  Description: string;
  ImagePath: string;
  City: string;
  Latitude: number;
  Longitude: number;
  Date: string;
  Hour: string;
  slug: string;
}

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-');
};

export async function getEvents(): Promise<Event[]> {
  const csvPath = path.join(process.cwd(), 'src', 'content', 'events.csv');
  const content = await fs.readFile(csvPath, 'utf-8');
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
  });

  const allEvents: Event[] = records.map((record: any) => ({
    ...record,
    Latitude: parseFloat(record.Latitude),
    Longitude: parseFloat(record.Longitude),
    slug: generateSlug(record.Title),
  }));

  const now = new Date();
  now.setHours(0, 0, 0, 0); // Set to start of today for comparison
  console.log("Current date (start of today):", now.toISOString());

  const upcomingEvents = allEvents.filter(event => {
    const eventDate = new Date(event.Date);
    console.log(`Event: ${event.Title}, Raw Date: ${event.Date}, Parsed Date: ${eventDate.toISOString()}, Is Upcoming: ${eventDate >= now}`);
    return eventDate >= now;
  });

  upcomingEvents.sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);
    return dateA.getTime() - dateB.getTime();
  });

  console.log("Filtered upcoming events count:", upcomingEvents.length);
  return upcomingEvents;
}

export async function getEventBySlug(slug: string): Promise<Event | undefined> {
  const events = await getEvents();
  return events.find((event) => event.slug === slug);
}
