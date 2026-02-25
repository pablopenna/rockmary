'use client';

import { getTranslation, Locale } from '../i18n';

interface PricingProps {
  locale: Locale
}

export default function Pricing({ locale }: PricingProps) {
  const t = getTranslation.bind(null, locale);
  const USD_RATE_PER_HOUR = 30;
  const EUR_RATE_PER_HOUR = 25;

  const pricing = t('PRICING_PARAGRAPH_PART2').replace('{usd_rate}', USD_RATE_PER_HOUR).replace('{eur_rate}', EUR_RATE_PER_HOUR);

  return (
    <section id="pricing" className="py-16 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-4">{t('PRICING_TITLE')}</h2>
        <p className="text-lg text-contrast-two mb-12 leading-relaxed">
          {t('PRICING_PARAGRAPH_PART1')}
          <b>{pricing}</b>
          {t('PRICING_PARAGRAPH_PART3')}
        </p>

        <h3 className="text-2xl font-bold text-contrast mb-4">{t('PRICING_WHATS_INCLUDED_TITLE')}</h3>
        <div className="mt-12 bg-base-two p-8 rounded-lg border-l-4 border-aux-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-contrast mb-2">{t('PRICING_INC_QUALITY_TITLE')}</h4>
              <p className="text-contrast-two">{t('PRICING_INC_QUALITY_DESC')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-contrast mb-2">{t('PRICING_INC_COMM_TITLE')}</h4>
              <p className="text-contrast-two">{t('PRICING_INC_COMM_DESC')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-contrast mb-2">{t('PRICING_INC_SUPPORT_TITLE')}</h4>
              <p className="text-contrast-two">{t('PRICING_INC_SUPPORT_DESC')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
