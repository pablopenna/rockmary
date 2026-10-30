import { ComponentType } from "react";
import { getTranslation, Locale } from "../i18n";
import { BlocksIcon, Container, IconProps, SectionHeading, UserPlusIcon, WrenchIcon } from "./ui";

interface ServicesProps {
  locale: Locale
}

interface Service {
  Icon: ComponentType<IconProps>,
  title: string,
  desc: string,
}

const SERVICES: Array<Service> = [
  { Icon: WrenchIcon, title: "SERVICES_REFINE_TITLE", desc: "SERVICES_REFINE_DESC" },
  { Icon: BlocksIcon, title: "SERVICES_BUILD_TITLE", desc: "SERVICES_BUILD_DESC" },
  { Icon: UserPlusIcon, title: "SERVICES_SUPPORT_TITLE", desc: "SERVICES_SUPPORT_DESC" },
];

export default function Services({ locale }: ServicesProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <Container as="section" id="services" aria-labelledby="services-title" className="flex flex-col gap-12 py-26">
      <SectionHeading
        eyebrow={t("SERVICES_EYEBROW")}
        title={t("SERVICES_TITLE")}
        titleId="services-title"
        intro={t("SERVICES_INTRO")}
      />

      <ul role="list" className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5 p-0">
        {SERVICES.map(({ Icon, title, desc }) => (
          <li key={title} className="flex min-w-0 flex-col gap-3.5 rounded-[18px] bg-base p-6 sm:p-8">
            <Icon className="text-contrast" />
            <h3 className="m-0 font-display text-[24px] font-bold tracking-[-0.02em]">{t(title)}</h3>
            <p className="m-0 text-contrast-two">{t(desc)}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
