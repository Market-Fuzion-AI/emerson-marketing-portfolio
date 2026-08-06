import React, { useCallback, useState } from 'react';
import { ImageIcon } from 'lucide-react';
import type { ProjectImage } from '../../types/project';
import { Lightbox } from './Lightbox';

type ScreenshotGalleryProps = {
  images: ProjectImage[];
  /** Number of empty frames to hold the layout before images are added. */
  placeholderCount?: number;
};

const GRID = 'grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6';
const TILE = 'aspect-[4/3] w-full rounded-lg border border-slate-200 shadow-sm';

/**
 * A grid of project screenshots, each opening in a shared Lightbox.
 *
 * Thumbnails are real buttons so they can be reached and activated by
 * keyboard. Two across on phones and three from the small breakpoint up,
 * which keeps thumbnails legible on a narrow screen without changing the
 * tablet or desktop layout.
 *
 * With no images the grid renders neutral empty frames that hold the same
 * space the screenshots will occupy. They disappear the moment the project's
 * `images` array is populated. No component change is needed to add images.
 */
export function ScreenshotGallery({ images, placeholderCount = 3 }: ScreenshotGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  if (images.length === 0) {
    return (
      <div className={GRID} aria-hidden="true">
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div key={i} className={`${TILE} bg-slate-50 flex items-center justify-center text-slate-300`}>
            <ImageIcon size={20} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className={GRID}>
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
