'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';
import { format, getTranslation, Locale } from '@/app/i18n';
import { Chip, Container, LongArrowIcon, SectionHeading, cx } from '@/app/components/ui';
import Lightbox, { LightboxImage } from './Lightbox';

interface PortfolioProps {
  locale: Locale;
}

interface ProjectIntroProps {
  tag: string;
  title: string;
  description: string;
  tech: string[];
}

const SAP_TECH = ['SAP CAP', 'SAPUI5', 'Cloud Foundry'];
const WAREHOUSE_TECH = ['SAPUI5', 'Apache Cordova', 'Android'];

// Gallery order shown in the lightbox, and which of those images appear as thumbnails.
const WAREHOUSE_GALLERY = [
  { src: '/portfolio/rf/portfolio_A_1.jpg', altKey: 'WORK_WAREHOUSE_IMG_3_ALT' },
  { src: '/portfolio/rf/portfolio_A_2.jpg', altKey: 'WORK_WAREHOUSE_IMG_2_ALT' },
  { src: '/portfolio/rf/portfolio_A_3.jpg', altKey: 'WORK_WAREHOUSE_IMG_1_ALT' },
  { src: '/portfolio/rf/portfolio_A_4.jpg', altKey: 'WORK_WAREHOUSE_IMG_4_ALT' },
];
const WAREHOUSE_THUMBNAILS = [2, 1];

const articleClasses = 'flex flex-wrap items-center gap-12 rounded-[22px] bg-base p-6 sm:p-10';
// Flex bases add the padding back: the mockup sizes these boxes as content-box.
const panelClasses = 'flex min-w-0 flex-[1_1_468px] rounded-[18px] bg-base-three px-4 py-8 sm:px-6';

function ProjectIntro({ tag, title, description, tech }: ProjectIntroProps) {
  return (
    <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px]">
      <Chip variant="tag" className="self-start">
        {tag}
      </Chip>
      <h3 className="m-0 font-display text-[clamp(28px,3vw,38px)] leading-[1.1] font-bold tracking-[-0.025em]">
        {title}
      </h3>
      <p className="m-0 text-contrast-two">{description}</p>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {tech.map((name) => (
          <Chip key={name} as="li" variant="light">
            {name}
          </Chip>
        ))}
      </ul>
    </div>
  );
}

export default function Portfolio({ locale }: PortfolioProps) {
  const t = getTranslation.bind(null, locale);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const gallery: LightboxImage[] = WAREHOUSE_GALLERY.map(({ src, altKey }) => ({ src, alt: t(altKey) }));

  return (
    <Container as="section" id="work" aria-labelledby="work-title" className="flex flex-col gap-10 py-26">
      <SectionHeading eyebrow={t('WORK_EYEBROW')} title={t('WORK_TITLE')} titleId="work-title" />

      <article className={articleClasses}>
        <ProjectIntro
          tag={t('WORK_SAP_TAG')}
          title={t('WORK_SAP_TITLE')}
          description={t('WORK_SAP_DESC')}
          tech={SAP_TECH}
        />
        <div role="img" aria-label={t('WORK_SAP_DIAGRAM_LABEL')} className={cx(panelClasses, '@container')}>
          {/* Stacked (arrow pointing down) until before → after fits on one row. */}
          <div className="flex w-full flex-col justify-center gap-4 @min-[496px]:flex-row @min-[496px]:items-center">
            <div
              aria-hidden="true"
              className="flex flex-col gap-1 rounded-[14px] border border-dashed border-contrast-three bg-base p-[18px] text-center @min-[496px]:flex-[0_1_188px]"
            >
              <span className="font-mono text-[11px] text-contrast-two">{t('WORK_DIAGRAM_BEFORE')}</span>
              <span className="font-display text-[18px] font-bold">SAP CRM</span>
              <span className="text-[13px] text-contrast-two">{t('WORK_DIAGRAM_CUSTOM')}</span>
            </div>
            <LongArrowIcon className="flex-none rotate-90 self-center text-chocolate-plum @min-[496px]:rotate-0" />
            <div
              aria-hidden="true"
              className="flex min-w-0 flex-col gap-2.5 rounded-[14px] bg-contrast p-[18px] text-white @min-[496px]:flex-[1_1_236px]"
            >
              <span className="font-mono text-[11px] text-silver">{t('WORK_DIAGRAM_AFTER')}</span>
              <span className="flex justify-between gap-2 rounded-[10px] bg-contrast-four px-3 py-2.5 text-[14px]">
                <span className="font-semibold">SAPUI5</span>
                <span className="text-silver">{t('WORK_DIAGRAM_FRONTEND')}</span>
              </span>
              <span className="flex justify-between gap-2 rounded-[10px] bg-contrast-four px-3 py-2.5 text-[14px]">
                <span className="font-semibold">SAP CAP</span>
                <span className="text-silver">{t('WORK_DIAGRAM_BACKEND')}</span>
              </span>
            </div>
          </div>
        </div>
      </article>

      <article className={articleClasses}>
        <ProjectIntro
          tag={t('WORK_WAREHOUSE_TAG')}
          title={t('WORK_WAREHOUSE_TITLE')}
          description={t('WORK_WAREHOUSE_DESC')}
          tech={WAREHOUSE_TECH}
        />
        <div className={cx(panelClasses, 'justify-center gap-5')}>
          {WAREHOUSE_THUMBNAILS.map((galleryIndex, position) => (
            <button
              key={galleryIndex}
              type="button"
              onClick={(event) => {
                // Safari doesn't focus buttons on click; the lightbox returns focus here on close.
                event.currentTarget.focus();
                setLightboxIndex(galleryIndex);
              }}
              aria-label={format(t('COMMON_LIGHTBOX_OPEN'), { alt: gallery[galleryIndex].alt })}
              aria-haspopup="dialog"
              className={cx(
                'relative block aspect-[9/16] w-[46%] max-w-[180px] cursor-zoom-in overflow-hidden rounded-2xl border-[6px] border-contrast p-0 transition-opacity hover:opacity-90',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-plum',
                position === 1 && 'mt-10'
              )}
            >
              <Image
                src={withBasePath(gallery[galleryIndex].src)}
                alt={gallery[galleryIndex].alt}
                fill
                sizes="180px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </article>

      {lightboxIndex !== null && (
        <Lightbox locale={locale} images={gallery} startIndex={lightboxIndex} onClose={closeLightbox} />
      )}
    </Container>
  );
}
