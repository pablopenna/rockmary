import { getTranslation, Locale } from "../i18n";
import { Container } from "./ui";

interface FactsProps {
  locale: Locale
}

const facts = [
  { value: "FACTS_1_VALUE", label: "FACTS_1_LABEL" },
  { value: "FACTS_2_VALUE", label: "FACTS_2_LABEL" },
  { value: "FACTS_3_VALUE", label: "FACTS_3_LABEL" },
  { value: "FACTS_4_VALUE", label: "FACTS_4_LABEL" },
];

export default function Facts({ locale }: FactsProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <Container as="section" aria-label={t('FACTS_LABEL')} className="pb-22">
      {/* Value then label in DOM order, so each fact reads as one phrase ("8+ yrs corporate engineering"). */}
      <ul role="list" className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-px overflow-hidden rounded-[18px] border border-contrast/12 bg-contrast/12 p-0">
        {facts.map((fact) => (
          <li key={fact.value} className="flex min-w-0 flex-col gap-0.5 bg-base-three px-6.5 py-6">
            <span className="font-display text-[34px] font-bold tracking-[-0.02em] break-words">{t(fact.value)}</span>{" "}
            <span className="text-[14px] text-contrast-two">{t(fact.label)}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
