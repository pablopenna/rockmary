import { getTranslation, Locale } from "../i18n";
import { ArrowRightIcon, Chip, ChipLogo, Container, SectionHeading } from "./ui";

interface TechnologiesProps {
  locale: Locale
}

interface Category {
  title: string,
  professional: Array<string>,
  confident: Array<string>,
}

const CATEGORIES: Array<Category> = [
  { title: "STACK_BACKEND", professional: ["Java", "Kotlin", "Node.js"], confident: ["Python", "C#"] },
  { title: "STACK_FRONTEND", professional: ["JavaScript", "TypeScript", "React"], confident: ["Vue.js", "Angular"] },
  { title: "STACK_SAP", professional: ["SAPUI5", "SAP CAP", "SAP BTP", "Cloud Foundry", "SAP CRM"], confident: [] },
  { title: "STACK_CLOUD", professional: ["AWS", "AWS CDK"], confident: [] },
  { title: "STACK_SIDE", professional: [], confident: ["C", "C++", "Rust", "Godot"] },
];

const ICONS: Record<string, string> = {
  "Java": "/Java_cropped.png",
  "Kotlin": "/Kotlin.png",
  "Node.js": "/Node.png",
  "Python": "/Python.png",
  "C#": "/CSharp.png",
  "JavaScript": "/Javascript.png",
  "TypeScript": "/Typescript.png",
  "React": "/React.png",
  "Vue.js": "/Vue.webp",
  "Angular": "/Angular.png",
  "SAPUI5": "/sapui5.png",
  "SAP CAP": "/SAPC.png",
  "SAP BTP": "/SAP.png",
  "Cloud Foundry": "/SAPCF.png",
  "SAP CRM": "/SAP.png",
  "AWS": "/AWS.png",
  "AWS CDK": "/CDK.png",
  "C": "/C.png",
  "C++": "/C++.png",
  "Rust": "/Rust.png",
  "Godot": "/Godot.png",
};

const chipListClasses = "m-0 flex list-none flex-wrap gap-2 p-0";

export default function Technologies({ locale }: TechnologiesProps) {
  const t = getTranslation.bind(null, locale);
  const pro = t("STACK_LEGEND_PRO");
  const confident = t("STACK_LEGEND_CONFIDENT");

  const legend = (
    <ul
      role="list"
      aria-label={t("STACK_LEGEND_LABEL")}
      className="m-0 flex list-none flex-wrap gap-4 p-0 text-[14px] text-contrast-two"
    >
      <li className="flex items-center gap-2">
        <span aria-hidden="true" className="size-3.5 flex-none rounded-[4px] bg-contrast" />
        {pro}
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden="true" className="size-3.5 flex-none rounded-[4px] border-[1.5px] border-contrast-three" />
        {confident}
      </li>
    </ul>
  );

  return (
    <section id="stack" aria-labelledby="stack-title" className="bg-base">
      <Container className="flex flex-col gap-10 py-26">
        <SectionHeading
          eyebrow={t("STACK_EYEBROW")}
          title={t("STACK_TITLE")}
          titleId="stack-title"
          aside={legend}
        />

        <ul role="list" className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4 p-0">
          {CATEGORIES.map((category) => (
            <li key={category.title} className="flex min-w-0 flex-col gap-3.5 rounded-[18px] bg-base-three p-[26px]">
              <h3 className="m-0 font-display text-[21px] font-bold tracking-[-0.02em]">{t(category.title)}</h3>
              <ul role="list" className={chipListClasses}>
                {category.professional.map((tech) => (
                  <Chip key={tech} as="li" variant="solid">
                    <ChipLogo src={ICONS[tech]} />{tech}<span className="sr-only"> ({pro})</span>
                  </Chip>
                ))}
                {category.confident.map((tech) => (
                  <Chip key={tech} as="li" variant="outline">
                    <ChipLogo src={ICONS[tech]} />{tech}<span className="sr-only"> ({confident})</span>
                  </Chip>
                ))}
              </ul>
            </li>
          ))}
          <li className="flex min-w-0 flex-col gap-3.5 rounded-[18px] bg-base-three p-[26px] ring-2 ring-chocolate-plum ring-inset">
            <h3 className="m-0 font-display text-[21px] font-bold tracking-[-0.02em]">{t("STACK_AI_TITLE")}</h3>
            <p className="m-0 text-[15px] text-contrast-two">{t("STACK_AI_DESC")}</p>
            <a
              href="#ai"
              className="mt-auto inline-flex items-center gap-2 self-start font-semibold text-chocolate-plum hover:text-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-plum"
            >
              {t("STACK_AI_LINK")}
              <ArrowRightIcon size={16} />
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
