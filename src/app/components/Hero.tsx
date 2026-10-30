import { getTranslation, Locale } from "../i18n";
import { ArrowRightIcon, ButtonLink, Container } from "./ui";

interface HeroProps {
  locale: Locale
}

const steps = [
  { n: "1", title: "WORKFLOW_STEP_1_TITLE", desc: "WORKFLOW_STEP_1_DESC" },
  { n: "2", title: "WORKFLOW_STEP_2_TITLE", desc: "WORKFLOW_STEP_2_DESC" },
  { n: "3", title: "WORKFLOW_STEP_3_TITLE", desc: "WORKFLOW_STEP_3_DESC" },
];

export default function Hero({ locale }: HeroProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <Container as="section" id="top" className="flex flex-wrap items-center gap-14 pb-16 pt-16 sm:pt-22">
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
        <span className="inline-flex max-w-full items-center gap-2.5 self-start rounded-full border border-contrast/12 px-3.5 py-[7px] text-[14px] font-medium text-contrast-four">
          <span aria-hidden="true" className="h-2 w-2 flex-none rounded-full bg-green-700" />
          {t('HERO_BADGE')}
        </span>
        <h1 className="m-0 font-display text-[clamp(44px,6.2vw,82px)] font-bold leading-none tracking-[-0.035em]">
          {t('HERO_TITLE_LINE_1')}
          <br />
          <span className="text-chocolate-plum">{t('HERO_TITLE_LINE_2')}</span>
        </h1>
        <p className="m-0 max-w-[560px] text-[20px] text-contrast-two">{t('HERO_SUBTITLE')}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#contact" variant="accent" size="md" icon={<ArrowRightIcon className="flex-none" />}>
            {t('HERO_CTA_PRIMARY')}
          </ButtonLink>
          <ButtonLink href="#work" variant="outline" size="md">
            {t('HERO_CTA_SECONDARY')}
          </ButtonLink>
        </div>
      </div>

      <div className="flex min-w-0 flex-[1_1_436px] flex-col gap-1 rounded-[22px] bg-contrast p-6 text-white sm:p-7">
        <h2 className="m-0 mb-1.5 border-b border-contrast-four pb-3.5 font-display text-[22px] font-bold tracking-[-0.02em]">
          {t('WORKFLOW_TITLE')}
        </h2>
        <ol role="list" className="m-0 flex list-none flex-col p-0">
          {steps.map((step) => (
            <li key={step.n} className="flex gap-4 border-b border-white/10 py-3.5 last:border-b-0">
              <span aria-hidden="true" className="w-3 flex-none font-semibold text-blush">
                {step.n}
              </span>
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="font-semibold">{t(step.title)}</span>
                <span className="text-[15px] text-silver">{t(step.desc)}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
