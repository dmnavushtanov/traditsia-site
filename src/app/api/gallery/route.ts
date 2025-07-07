import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Ensure this route can be statically exported
export const dynamic = 'force-static'

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'gallery');
    
    // Check if gallery directory exists
    try {
      await fs.access(galleryPath);
    } catch {
      // Gallery directory doesn't exist, return empty array
      return NextResponse.json([]);
    }

    const entries = await fs.readdir(galleryPath, { withFileTypes: true });
    const albums = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);

    const albumsData = await Promise.all(
      albums.map(async (albumName) => {
        try {
          const albumPath = path.join(galleryPath, albumName);
          const files = await fs.readdir(albumPath);
          const imageFiles = files.filter(file => 
            /\.(jpe?g|png|gif|webp)$/i.test(file)
          );
          
          const cover = imageFiles.length > 0
            ? `/gallery/${albumName}/${imageFiles[Math.floor(Math.random() * imageFiles.length)]}`
            : null;

          return {
            name: albumName,
            cover,
            imageCount: imageFiles.length
          };
        } catch (error) {
          console.error(`Error reading album ${albumName}:`, error);
          return {
            name: albumName,
            cover: null,
            imageCount: 0
          };
        }
      })
    );

    return NextResponse.json(albumsData);
  } catch (error) {
    console.error('Error reading gallery:', error);
    return NextResponse.json({ error: 'Failed to read gallery' }, { status: 500 });
  }
} 