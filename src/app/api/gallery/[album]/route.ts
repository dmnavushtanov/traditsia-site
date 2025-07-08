import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Ensure this API route can be statically exported
export const dynamic = 'force-static';

export async function generateStaticParams(): Promise<{ album: string }[]> {
  const galleryPath = path.join(process.cwd(), 'public', 'gallery');
  const entries = await fs.readdir(galleryPath, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => ({ album: encodeURIComponent(entry.name) }));
}

export async function GET(request: Request, context: any) {
  try {
    const { album } = context.params;
    const albumName = decodeURIComponent(album);
    const albumPath = path.join(process.cwd(), 'public', 'gallery', albumName);

    // Check if album directory exists
    try {
      await fs.access(albumPath);
    } catch {
      return NextResponse.json({ error: 'Album not found' }, { status: 404 });
    }

    const files = await fs.readdir(albumPath);
    const images = files
      .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file))
      .map(fileName => ({ name: fileName, src: `/gallery/${albumName}/${fileName}` }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading album:', error);
    return NextResponse.json({ error: 'Failed to read album' }, { status: 500 });
  }
} 