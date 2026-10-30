import { getTranslation, Locale } from "../i18n";
import { AI_HARNESSES, AI_LOGOS, AI_MODELS } from "../data/aiTools";
import { CheckIcon, Chip, ChipLogo, CodeIcon, Container, SectionHeading, SparklesIcon } from "./ui";

interface AiSectionProps {
  locale: Locale
}

const WITHOUT_KEYS = ["AI_WITHOUT_1", "AI_WITHOUT_2", "AI_WITHOUT_3", "AI_WITHOUT_4"];

const cardClasses = "flex min-w-0 flex-col gap-[22px] rounded-[20px] bg-contrast-four p-6 sm:p-8";
const cardTitleClasses = "m-0 font-display text-[26px] font-bold tracking-[-0.02em]";
const iconBoxClasses = "flex size-11 flex-none items-center justify-center rounded-xl";

interface ChipGroupProps {
  id: string,
  label: string,
  items: Array<string>,
  anyOther: string,
}

function ChipGroup({ id, label, items, anyOther }: ChipGroupProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <h4 id={id} className="m-0 font-mono text-[12px] font-normal uppercase tracking-[0.08em] text-silver">
        {label}
      </h4>
      <ul role="list" aria-labelledby={id} className="m-0 flex list-none flex-wrap gap-2 p-0">
        {items.map((item) => (
          <Chip key={item} as="li" variant="onDark" size="md">
            <ChipLogo src={AI_LOGOS[item]} />{item}
          </Chip>
        ))}
        <Chip as="li" variant="onDarkDashed" size="md">{anyOther}</Chip>
      </ul>
    </div>
  );
}

export default function AiSection({ locale }: AiSectionProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <section id="ai" aria-labelledby="ai-title" className="bg-contrast text-white">
      <Container className="flex flex-col gap-14 py-26">
        <SectionHeading
          tone="dark"
          size="lg"
          eyebrow={t("AI_EYEBROW")}
          title={t("AI_TITLE")}
          titleId="ai-title"
          intro={t("AI_INTRO")}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          <div className={cardClasses}>
            <div className="flex items-center gap-3">
              <span className={`${iconBoxClasses} bg-chocolate-plum text-white`}>
                <SparklesIcon />
              </span>
              <h3 className={cardTitleClasses}>{t("AI_WITH_TITLE")}</h3>
            </div>
            <ChipGroup id="ai-harnesses" label={t("AI_HARNESSES")} items={AI_HARNESSES} anyOther={t("AI_ANY_OTHER")} />
            <ChipGroup id="ai-models" label={t("AI_MODELS")} items={AI_MODELS} anyOther={t("AI_ANY_OTHER")} />
          </div>

          <div className={cardClasses}>
            <div className="flex items-center gap-3">
              <span className={`${iconBoxClasses} bg-base-three text-contrast`}>
                <CodeIcon />
              </span>
              <h3 className={cardTitleClasses}>{t("AI_WITHOUT_TITLE")}</h3>
            </div>
            <ul role="list" className="m-0 flex list-none flex-col gap-3.5 p-0">
              {WITHOUT_KEYS.map((key) => (
                <li key={key} className="flex gap-3">
                  <CheckIcon className="mt-[3px] flex-none text-blush" />
                  <span className="min-w-0 text-base-two">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
