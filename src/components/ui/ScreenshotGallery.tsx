import React, { useCallback, useState } from 'react';
import { ImageIcon } from 'lucide-react';
import type { ProjectImage } from '../../types/project';
import { Lightbox } from './Lightbox';

type ScreenshotGalleryProps = {
  images: ProjectImage[];
  /** Number of empty tiles to show when `images` is empty. */
  placeholderCount?: number;
  /** Caption shown beneath empty tiles. */
  placeholderLabel?: string;
};

const TILE = 'aspect-[4/3] w-full rounded-lg border border-slate-200 shadow-sm';

/**
 * A 3-up grid of project screenshots, each opening in a shared Lightbox.
 *
 * Thumbnails are real buttons so they can be reached and activated by
 * keyboard. When no images have been added yet, the gallery renders
 * inert placeholder tiles that hold the layout for future evidence.
 */
export function ScreenshotGallery({
  images,
  placeholderCount = 3,
  placeholderLabel = 'Screenshots to be added',
}: ScreenshotGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  if (images.length === 0) {
    return (
      <div className="mt-6">
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <div
              key={i}
              aria-hidden="true"
              className={`${TILE} bg-slate-50 border-dashed flex items-center justify-center text-slate-300`}
            >
              <ImageIcon size={20} />
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs font-medium text-slate-400">{placeholderLabel}</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-label={`View larger: ${image.alt}`}
            className={`${TILE} group overflow-hidden cursor-zoom-in transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <Lightbox image={selectedImage} onClose={closeLightbox} />
    </>
  );
}
