import React, { useEffect, useRef } from 'react';
import type { ProjectMedia } from '../../types/project';

type LightboxProps = {
  media: ProjectMedia | null;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), video[controls], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Full-screen media overlay. Renders nothing when `media` is null.
 *
 * Handles Escape-to-close, background scroll locking, and focus management
 * so the overlay is usable by keyboard and announced as a dialog.
 *
 * The focus trap queries its focusable children on every Tab rather than
 * assuming a fixed set, because a video entry adds a focusable player that an
 * image entry does not have.
 */
export function Lightbox({ media, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!media) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;

      const nodes = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null || el.tagName === 'VIDEO');

      if (nodes.length === 0) {
        e.preventDefault();
        return;
      }

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      const inside = dialogRef.current.contains(active);

      // Only intervene at the edges, so Tab moves naturally in between.
      if (e.shiftKey && (active === first || !inside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !inside)) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [media, onClose]);

  if (!media) return null;

  const label = media.type === 'video' ? media.title : media.alt;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div ref={dialogRef} className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/75"
        >
          <span>Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {media.type === 'video' ? (
          <video
            src={media.src}
            poster={media.poster}
            controls
            playsInline
            preload="none"
            aria-label={media.title}
            className="w-full max-h-[80vh] rounded-xl shadow-2xl bg-black"
          />
        ) : (
          <img src={media.src} alt={media.alt} className="w-full h-auto rounded-xl shadow-2xl" />
        )}
      </div>
    </div>
  );
}
