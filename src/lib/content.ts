import fs from 'fs/promises';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface Event {
  EventID: string;
  Title: string;
  Description: string;
  ImagePath: string;
  City: string;
  Latitude: number;
  Longitude: number;
  Date: string;
  Hour: string;
  slug: string;
  Type: string;
}

export interface Branch {
  Name: string;
  City: string;
  Head: string;
  Phone?: string;
  Email?: string;
  Latitude: number;
  Longitude: number;
}

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[\s.,;:'"!?()„“”]+/g, '-') // Replace spaces and common punctuation with hyphens, including special quotes
    .replace(/^-+|-+$/g, '') // Trim leading/trailing hyphens
    .replace(/-+/g, '-'); // Collapse multiple hyphens
};

import { Language } from '@/lib/translations';

export async function getEvents(locale: Language): Promise<Event[]> {
  const csvFileName = locale === 'en' ? 'events.en.csv' : 'events.csv';
  const csvPath = path.join(process.cwd(), 'src', 'content', csvFileName);
  const content = await fs.readFile(csvPath, 'utf-8');
  const records = parse(content, {
    delimiter: ';',
    columns: ['EventID', 'Title', 'Description', 'ImagePath', 'City', 'Latitude', 'Longitude', 'Date', 'Hour', 'Type'],
    skip_empty_lines: true,
  });

  const allEvents: Event[] = records.map((record: any) => ({
    ...record,
    EventID: (record.EventID || '').padStart(5, '0'),
    Latitude: parseFloat(record.Latitude) || 0,
    Longitude: parseFloat(record.Longitude) || 0,
    slug: generateSlug(record.Title || ''),
    Type: record.Type || '',
  }));

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const upcomingEvents: Event[] = [];
  const pastEvents: Event[] = [];

  allEvents.forEach(event => {
    const eventDate = new Date(event.Date);
    eventDate.setHours(0, 0, 0, 0);
    if (eventDate >= now) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });

  upcomingEvents.sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);
    return dateA.getTime() - dateB.getTime();
  });

  pastEvents.sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);
    return dateB.getTime() - dateA.getTime(); // Sort past events by most recent first
  });

  return [...upcomingEvents, ...pastEvents];
}

export async function getEventBySlug(slug: string, locale: Language): Promise<Event | undefined> {
  const events = await getEvents(locale);
  return events.find((event) => event.slug === slug);
}

import { Language } from '@/lib/translations';

export async function getBranches(locale: Language): Promise<Branch[]> {
  const csvFileName = locale === 'en' ? 'branches.en.csv' : 'branches.csv';
  const csvPath = path.join(process.cwd(), 'src', 'content', csvFileName);
  const content = await fs.readFile(csvPath, 'utf-8');
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
  });

  const branches: Branch[] = records.map((record: any) => ({
    ...record,
    Latitude: parseFloat(record.Latitude),
    Longitude: parseFloat(record.Longitude),
  }));

  branches.sort((a, b) => a.City.localeCompare(b.City));

  return branches;
}