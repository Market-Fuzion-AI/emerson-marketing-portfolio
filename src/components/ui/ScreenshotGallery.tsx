import React, { useCallback, useState } from 'react';
import { ImageIcon, Play } from 'lucide-react';
import type { ProjectMedia } from '../../types/project';
import { Lightbox } from './Lightbox';

type ScreenshotGalleryProps = {
  media: ProjectMedia[];
  /** Number of empty frames to hold the layout before media is added. */
  placeholderCount?: number;
};

const GRID = 'grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6';
const TILE = 'relative aspect-[4/3] w-full rounded-lg border border-slate-200 shadow-sm';

/**
 * A grid of project media, each opening in a shared Lightbox.
 *
 * Images and videos may be mixed in one array. A video is represented in the
 * grid by its poster image plus a play indicator, so the grid never downloads
 * video data; the file is only fetched once the lightbox opens.
 *
 * Thumbnails are real buttons, so Enter and Space activate them and they can
 * be reached by keyboard. Two across on phones and three from the small
 * breakpoint up.
 *
 * With no media the grid renders neutral empty frames that hold the same
 * space the screenshots will occupy.
 */
export function ScreenshotGallery({ media, placeholderCount = 3 }: ScreenshotGalleryProps) {
  const [selected, setSelected] = useState<ProjectMedia | null>(null);
  const closeLightbox = useCallback(() => setSelected(null), []);

  if (media.length === 0) {
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
        {media.map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setSelected(item)}
            aria-label={
              item.type === 'video' ? `Play video: ${item.title}` : `View larger: ${item.alt}`
            }
            className={`${TILE} group overflow-hidden cursor-zoom-in transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2`}
          >
            <img
              src={item.type === 'video' ? item.poster : item.src}
              alt={item.type === 'video' ? '' : item.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            {item.type === 'video' && (
              <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-sm">
                  <Play size={16} fill="currentColor" className="ml-0.5" />
                </span>
              </span>
            )}
          </button>
        ))}
      </div>

      <Lightbox media={selected} onClose={closeLightbox} />
    </>
  );
}
