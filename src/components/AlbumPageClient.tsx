"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const ImageLightbox = dynamic(() => import("@/components/ImageLightbox"));

export interface AlbumImage {
  name: string;
  src: string;
}

interface AlbumPageClientProps {
  albumName: string;
  images: AlbumImage[];
}

export default function AlbumPageClient({ albumName, images }: AlbumPageClientProps) {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-12 px-6">
        <Link href="/gallery" className="text-blue-600 hover:underline mb-6 inline-block">
          &larr; Back to {t("gallery")}
        </Link>
        <h1 className="text-3xl font-bold mb-2">{albumName}</h1>
        <p className="text-gray-600 mb-8">
          {images.length} {images.length === 1 ? "image" : "images"}
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
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}

