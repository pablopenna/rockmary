import { format, getTranslation, Locale } from '@/app/i18n';
import { CheckIcon, Container, eyebrowClasses, sectionTitleClasses } from '@/app/components/ui';

interface PricingProps {
  locale: Locale;
}

const EUR_RATE_PER_HOUR = 25;
const USD_RATE_PER_HOUR = 30;
const CNY_RATE_PER_HOUR = 200;
const RATES = { eur: EUR_RATE_PER_HOUR, usd: USD_RATE_PER_HOUR, cny: CNY_RATE_PER_HOUR };

const INCLUDED = [
  { title: 'PRICING_QUALITY_TITLE', desc: 'PRICING_QUALITY_DESC' },
  { title: 'PRICING_COMM_TITLE', desc: 'PRICING_COMM_DESC' },
  { title: 'PRICING_SUPPORT_TITLE', desc: 'PRICING_SUPPORT_DESC' },
];

export default function Pricing({ locale }: PricingProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-base">
      <Container className="flex flex-wrap items-start gap-12 py-26">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
          <span className={eyebrowClasses()}>{t('PRICING_EYEBROW')}</span>
          <h2 id="pricing-title" className={sectionTitleClasses('md')}>
            {t('PRICING_TITLE')}
          </h2>
          <p className="m-0 flex flex-wrap items-baseline gap-2.5 pt-2">
            <span className="font-display text-[72px] leading-none font-bold tracking-[-0.04em]">
              {format(t('PRICING_RATE'), RATES)}
            </span>
            <span className="text-[18px] text-contrast-two">
              {format(t('PRICING_RATE_SUFFIX'), RATES)}
            </span>
          </p>
          <p className="m-0 text-contrast-two">{t('PRICING_NOTE')}</p>
        </div>

        <div className="flex min-w-0 flex-[1_1_524px] flex-col gap-[22px] rounded-[20px] bg-base-three p-6 sm:p-8">
          <h3 className="m-0 font-mono text-[12px] font-normal tracking-[0.08em] text-contrast-two uppercase">
            {t('PRICING_INCLUDED')}
          </h3>
          <ul className="m-0 flex list-none flex-col gap-[22px] p-0">
            {INCLUDED.map((item) => (
              <li key={item.title} className="flex gap-3.5">
                <CheckIcon size={22} className="mt-0.5 flex-none text-chocolate-plum" />
                <span className="flex min-w-0 flex-col">
                  <span className="font-semibold">{t(item.title)}</span>
                  <span className="text-[15px] text-contrast-two">{t(item.desc)}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
