'use client';

import { KeyboardEvent as ReactKeyboardEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';
import { format, getTranslation, Locale } from '@/app/i18n';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@/app/components/ui';

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  locale: Locale;
  images: LightboxImage[];
  startIndex: number;
  onClose: () => void;
}

const controlClasses =
  'inline-flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush';

export default function Lightbox({ locale, images, startIndex, onClose }: LightboxProps) {
  const t = getTranslation.bind(null, locale);
  const [index, setIndex] = useState(startIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = images.length;

  const showPrev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const showNext = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  // Focus the dialog, lock page scroll, and restore both on close.
  useEffect(() => {
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNext();
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, showPrev, showNext]);

  const trapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;
    const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled])'));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && (document.activeElement === first || !dialogRef.current.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const image = images[index];

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      lang={locale}
      aria-label={t('COMMON_LIGHTBOX_LABEL')}
      onKeyDown={trapFocus}
      onClick={closeOnBackdrop}
      className="fixed inset-0 z-50 flex flex-col items-center gap-4 bg-black/90 px-4 pt-18 pb-4 sm:px-16 sm:pb-6"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={t('COMMON_LIGHTBOX_CLOSE')}
        className={`${controlClasses} absolute top-3 right-3 sm:top-4 sm:right-4`}
      >
        <CloseIcon />
      </button>

      <div className="pointer-events-none relative min-h-0 w-full max-w-[1200px] flex-1">
        <Image
          key={image.src}
          src={withBasePath(image.src)}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {total > 1 && (
        <div className="flex items-center gap-4">
          <button type="button" onClick={showPrev} aria-label={t('COMMON_LIGHTBOX_PREV')} className={controlClasses}>
            <ChevronLeftIcon />
          </button>
          <p className="m-0 min-w-14 text-center font-mono text-[14px] text-base">
            <span aria-hidden="true">
              {index + 1} / {total}
            </span>
            <span className="sr-only" aria-live="polite">
              {format(t('COMMON_LIGHTBOX_COUNTER'), { n: index + 1, total })}
            </span>
          </p>
          <button type="button" onClick={showNext} aria-label={t('COMMON_LIGHTBOX_NEXT')} className={controlClasses}>
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </div>,
    document.body
  );
}
