import fs from 'fs/promises';
import path from 'path';

export interface AlbumMeta {
  name: string;
  cover: string | null;
  imageCount: number;
}

export async function getAlbumList(): Promise<AlbumMeta[]> {
  const galleryPath = path.join(process.cwd(), 'public', 'gallery');

  try {
    await fs.access(galleryPath);
  } catch {
    return [];
  }

  const entries = await fs.readdir(galleryPath, { withFileTypes: true });
  const albums = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);

  const albumsData = await Promise.all(
    albums.map(async (albumName) => {
      try {
        const albumPath = path.join(galleryPath, albumName);
        const files = await fs.readdir(albumPath);
        const imageFiles = files.filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file));

        const basePath = process.env.NEXT_PUBLIC_BASE_PATH
          ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\//, '')}`
          : '';

        const cover = imageFiles.length > 0
          ? `${basePath}/gallery/${albumName}/${imageFiles[Math.floor(Math.random() * imageFiles.length)]}`
          : null;

        return {
          name: albumName,
          cover,
          imageCount: imageFiles.length,
        } as AlbumMeta;
      } catch {
        return {
          name: albumName,
          cover: null,
          imageCount: 0,
        } as AlbumMeta;
      }
    })
  );

  return albumsData;
}
