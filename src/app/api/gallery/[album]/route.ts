import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Ensure this route can be statically exported
export const dynamic = 'force-static'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ album: string }> }
) {
  try {
    const { album } = await params;
    const albumName = decodeURIComponent(album);
    const albumPath = path.join(process.cwd(), 'public', 'gallery', albumName);
    
    // Check if album directory exists
    try {
      await fs.access(albumPath);
    } catch {
      return NextResponse.json({ error: 'Album not found' }, { status: 404 });
    }

    const files = await fs.readdir(albumPath);
    const imageFiles = files.filter(file => 
      /\.(jpe?g|png|gif|webp)$/i.test(file)
    );

    const images = imageFiles.map(fileName => ({
      name: fileName,
      src: `/gallery/${albumName}/${fileName}`
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading album:', error);
    return NextResponse.json({ error: 'Failed to read album' }, { status: 500 });
  }
} 