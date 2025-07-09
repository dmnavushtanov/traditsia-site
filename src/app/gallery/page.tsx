import { getAlbumList } from '@/lib/gallery';
import GalleryPageClient from '@/components/GalleryPageClient';

export const dynamic = 'force-static';

export default async function GalleryPage() {
  const albums = await getAlbumList();
  return <GalleryPageClient albums={albums} />;
}