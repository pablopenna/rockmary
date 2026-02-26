'use client';

import { FormEvent, useState } from 'react';
import { getTranslation, Locale } from '../i18n';

interface ContactProps {
  locale: Locale
}

export default function Contact({ locale }: ContactProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const t = getTranslation.bind(null, locale);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1000);
  };

  return (
    <section id="contact" className="pt-8 pb-12 bg-base-two">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-12">{t('CONTACT_TITLE')}</h2>
        <div className="space-y-8">
          <div>
            <p className="text-lg text-contrast-two mb-8 leading-relaxed">
              {t('CONTACT_PARAGRAPH')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
            <div className="bg-base p-6 rounded-lg border-l-4 border-aux-1 hover:shadow-lg transition h-full">
              <p className="text-sm text-contrast-three font-semibold mb-4 uppercase tracking-wide">{t('CONTACT_LABEL_EMAIL')}</p>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${t('CONTACT_EMAIL')}`}
                  className="text-xl font-bold text-contrast hover:text-chocolate-plum transition"
                >
                  {t('CONTACT_EMAIL')}
                </a>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {copiedId === 'email' && <span className="text-sm text-contrast-two">{t('CONTACT_COPY_COPIED')}</span>}
                  <button
                    onClick={() => handleCopy(t('CONTACT_EMAIL'), 'email')}
                    className="p-2 rounded-lg hover:bg-base transition text-xl"
                    title={t('CONTACT_COPY_TITLE')}
                  >
                    📋
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-base p-6 rounded-lg border-l-4 border-aux-2 hover:shadow-lg transition h-full">
              <p className="text-sm text-contrast-three font-semibold mb-4 uppercase tracking-wide">{t('CONTACT_LABEL_LINKEDIN')}</p>
              <div className="flex items-center justify-between gap-4">
                <a
                  href="https://linkedin.com/in/pprdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-contrast hover:text-aux-1 transition"
                >
                  {t('CONTACT_LINKEDIN_TEXT')}
                </a>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {copiedId === 'linkedin' && <span className="text-sm text-contrast-two">{t('CONTACT_COPY_COPIED')}</span>}
                  <button
                    onClick={() => handleCopy('https://linkedin.com/in/pprdev/', 'linkedin')}
                    className="p-2 rounded-lg hover:bg-base transition text-xl"
                    title={t('CONTACT_COPY_TITLE')}
                  >
                    📋
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-contrast-two text-lg pt-4">
            {t('CONTACT_THANK_YOU')}
          </p>
        </div>
      </div>
    </section>
  );
}
