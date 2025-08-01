import fs from 'fs/promises';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface Event {
  EventID: string;
  Title: string;
  Description: string;
  ImagePath: string;
  // Add a default image path if the one from the CSV is empty
  // This is to prevent errors with next/image component which requires a valid src
  // If ImagePath is empty, use a placeholder image
  // The placeholder image is located at public/images/events/placeholder.jpg
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
  Head?: string;
  Phone?: string;
  Email?: string;
  Latitude: number;
  Longitude: number;
}

const transliterate = (text: string) => {
  const map: Record<string, string> = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sht', 'ъ': 'a',
    'ь': 'y', 'ю': 'yu', 'я': 'ya'
  };
  return text.split('').map(ch => map[ch] ?? ch).join('');
};

const generateSlug = (title: string) => {
  return transliterate(title.toLowerCase())
    .replace(/[\s.,;:'"!?()„“”]+/g, '-') // Replace spaces and common punctuation with hyphens, including special quotes
    .replace(/^-+|-+$/g, '') // Trim leading/trailing hyphens
    .replace(/-+/g, '-'); // Collapse multiple hyphens
};

import { Language } from '@/lib/translations';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\//, '')}`
  : '';

export async function getEvents(locale: Language): Promise<Event[]> {
  const csvFileName = locale === 'en' ? 'events.en.csv' : 'events.csv';
  const csvPath = path.join(process.cwd(), 'src', 'content', csvFileName);
  const content = await fs.readFile(csvPath, 'utf-8');
  const records = parse(content, {
    delimiter: ';',
    columns: ['EventID', 'Title', 'Description', 'ImagePath', 'City', 'Latitude', 'Longitude', 'Date', 'Hour', 'Type'],
    skip_empty_lines: true,
    relax_column_count: true,
    // Some titles contain double quotes for emphasis. Allow such quotes
    // without requiring them to be escaped.
    relax_quotes: true,
    from_line: 2,
  });

  const allEvents: Event[] = records.map((record: any) => {
    const rawPath = String(record.ImagePath || '').trim() || '/images/events/placeholder.jpg';
    const cleaned = rawPath.replace(/^\//, '');
    return {
      ...record,
      EventID: (record.EventID || '').padStart(5, '0'),
      Latitude: parseFloat(record.Latitude),
      Longitude: parseFloat(record.Longitude),
      slug: generateSlug(record.Title || ''),
      Type: record.Type || '',
      ImagePath: `${basePath}/${cleaned}`,
    };
  });

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const upcomingWithDate: Event[] = [];
  const upcomingWithoutDate: Event[] = [];
  const pastEvents: Event[] = [];

  allEvents.forEach(event => {
    if (!event.Date) {
      upcomingWithoutDate.push(event);
      return;
    }

    const eventDate = new Date(event.Date);
    eventDate.setHours(0, 0, 0, 0);

    if (isNaN(eventDate.getTime())) {
      upcomingWithoutDate.push(event);
    } else if (eventDate >= now) {
      upcomingWithDate.push(event);
    } else {
      pastEvents.push(event);
    }
  });

  upcomingWithDate.sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);
    return dateA.getTime() - dateB.getTime();
  });

  pastEvents.sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);
    return dateB.getTime() - dateA.getTime(); // Sort past events by most recent first
  });

  return [...upcomingWithDate, ...upcomingWithoutDate, ...pastEvents];
}

export async function getEventBySlug(slug: string, locale: Language): Promise<Event | undefined> {
  const events = await getEvents(locale);
  return events.find((event) => event.slug === slug);
}


export async function getBranches(locale: Language): Promise<Branch[]> {
  const csvFileName = locale === 'en' ? 'branches.en.csv' : 'branches.csv';
  const csvPath = path.join(
    process.cwd(),
    'src',
    'content',
    csvFileName
  );
  const content = await fs.readFile(csvPath, 'utf-8');
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    bom: true,
  });

  const branches: Branch[] = records.map((record: any) => ({
    ...record,
    Latitude: parseFloat(record.Latitude),
    Longitude: parseFloat(record.Longitude),
  }));

  branches.sort((a, b) => a.City.localeCompare(b.City));

  return branches;
}
