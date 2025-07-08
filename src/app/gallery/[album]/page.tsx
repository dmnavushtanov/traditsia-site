import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import AlbumPageClient, { AlbumImage } from '@/components/AlbumPageClient';
interface AlbumPageProps {
  params: {
    album: string;
  };
}

export async function generateStaticParams() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'gallery');
    const entries = await fs.readdir(galleryPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => ({ album: encodeURIComponent(entry.name) }));
  } catch {
    return [];
  }
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const albumName = decodeURIComponent(params.album);
  const albumPath = path.join(process.cwd(), 'public', 'gallery', albumName);

  try {
    await fs.access(albumPath);
  } catch {
    return notFound();
  }

  const files = await fs.readdir(albumPath);
  const images: AlbumImage[] = files
    .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .map(fileName => ({ name: fileName, src: `/gallery/${albumName}/${fileName}` }));

  return <AlbumPageClient albumName={albumName} images={images} />;
}
