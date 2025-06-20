'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface Album {
  name: string;
  cover: string | null;
  imageCount: number;
}

export default function GalleryPage() {
  const { t } = useLanguage();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAlbums() {
      try {
        console.log('Loading albums...');
        const response = await fetch('/api/gallery');
        console.log('API response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Albums loaded:', data);
        setAlbums(data);
      } catch (error) {
        console.error('Error loading albums:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadAlbums();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/gerb.jpg"
                alt="Traditsia Logo"
                width={50}
                height={50}
                className="h-12 w-12"
              />
              <span className="text-xl font-bold">
                {t('organizationName')}
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="space-x-6">
                {[
                  { key: 'home', href: '' },
                  { key: 'gallery', href: 'gallery' },
                  { key: 'events', href: 'events' },
                  { key: 'about', href: 'about' },
                  { key: 'contact', href: 'contact' }
                ].map((item) => (
                  <Link
                    key={item.key}
                    href={`/${item.href}`}
                    className="hover:text-gray-600"
                  >
                    {t(item.key as any)}
                  </Link>
                ))}
              </nav>
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-8">{t('gallery')}</h1>
          <div className="text-center">Loading albums...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/gerb.jpg"
                alt="Traditsia Logo"
                width={50}
                height={50}
                className="h-12 w-12"
              />
              <span className="text-xl font-bold">
                {t('organizationName')}
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="space-x-6">
                {[
                  { key: 'home', href: '' },
                  { key: 'gallery', href: 'gallery' },
                  { key: 'events', href: 'events' },
                  { key: 'about', href: 'about' },
                  { key: 'contact', href: 'contact' }
                ].map((item) => (
                  <Link
                    key={item.key}
                    href={`/${item.href}`}
                    className="hover:text-gray-600"
                  >
                    {t(item.key as any)}
                  </Link>
                ))}
              </nav>
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-8">{t('gallery')}</h1>
          <div className="text-center text-red-600">
            <p>Error loading gallery: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/gerb.jpg"
              alt="Traditsia Logo"
              width={50}
              height={50}
              className="h-12 w-12"
            />
            <span className="text-xl font-bold">
              {t('organizationName')}
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="space-x-6">
              {[
                { key: 'home', href: '' },
                { key: 'gallery', href: 'gallery' },
                { key: 'events', href: 'events' },
                { key: 'about', href: 'about' },
                { key: 'contact', href: 'contact' }
              ].map((item) => (
                <Link
                  key={item.key}
                  href={`/${item.href}`}
                  className="hover:text-gray-600"
                >
                  {t(item.key as any)}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-8">{t('gallery')}</h1>
        
        {albums.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No albums found. Create folders in public/gallery/ and add images to them.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {albums.map(album => (
              <Link
                key={album.name}
                href={`/gallery/${encodeURIComponent(album.name)}`}
                className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                onClick={(e) => {
                  console.log('Clicking on album:', album.name);
                  console.log('Navigating to:', `/gallery/${encodeURIComponent(album.name)}`);
                }}
              >
                <div className="aspect-video relative">
                  {album.cover ? (
                    <Image
                      src={album.cover}
                      alt={album.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No images</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">{album.name}</h2>
                  <p className="text-gray-600 text-sm">
                    {album.imageCount} {album.imageCount === 1 ? 'image' : 'images'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 