'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ImageLightbox from '@/components/ImageLightbox';

interface AlbumImage {
  name: string;
  src: string;
}

export default function AlbumPage() {
  const params = useParams();
  const { t } = useLanguage();
  const [albumName, setAlbumName] = useState<string>('');
  const [images, setImages] = useState<AlbumImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (params?.album) {
      const decodedAlbumName = decodeURIComponent(params.album as string);
      setAlbumName(decodedAlbumName);
    }
  }, [params]);

  useEffect(() => {
    if (!albumName) return;

    async function loadAlbumImages() {
      try {
        setLoading(true);
        console.log('Loading images for album:', albumName);
        
        const response = await fetch(`/api/gallery/${encodeURIComponent(albumName)}`);
        console.log('Album API response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Album images loaded:', data);
        setImages(data);
      } catch (error) {
        console.error('Error loading album images:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadAlbumImages();
  }, [albumName]);

  // Lightbox functions
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Navigation component
  const Navigation = () => (
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
  );

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <Navigation />
        <div className="container mx-auto py-12 px-6">
          <Link href="/gallery" className="text-blue-600 hover:underline mb-6 inline-block">
            &larr; Back to {t('gallery')}
          </Link>
          <h1 className="text-3xl font-bold mb-8">{albumName || 'Album'}</h1>
          <div className="text-center text-red-600">
            <p>Error loading album: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <Navigation />
        <div className="container mx-auto py-12 px-6">
          <Link href="/gallery" className="text-blue-600 hover:underline mb-6 inline-block">
            &larr; Back to {t('gallery')}
          </Link>
          <h1 className="text-3xl font-bold mb-8">{albumName || 'Loading...'}</h1>
          <div className="text-center">Loading images...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navigation />
      <div className="container mx-auto py-12 px-6">
        <Link href="/gallery" className="text-blue-600 hover:underline mb-6 inline-block">
          &larr; Back to {t('gallery')}
        </Link>
        
        <h1 className="text-3xl font-bold mb-2">{albumName}</h1>
        <p className="text-gray-600 mb-8">
          {images.length} {images.length === 1 ? 'image' : 'images'}
        </p>

        {images.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No images found in this album.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={`${image.name}-${index}`}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
} 