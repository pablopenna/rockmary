import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { format, getTranslation, Locale } from "../i18n";
import { Container } from "./ui";

interface FooterProps {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <footer className="border-t border-contrast/12">
      {/* Right padding keeps the text clear of the floating back-to-top button until the page has side margins. */}
      <Container className="flex flex-wrap items-center justify-between gap-4 py-7 pr-20 text-[14px] text-contrast-two min-[1376px]:pr-6">
        <span className="flex items-center gap-2.5">
          <Image
            src={withBasePath("/logov1_3.png")}
            alt=""
            width={22}
            height={25}
            className="h-[25px] w-[22px] flex-none object-contain"
          />
          {format(t('FOOTER_COPYRIGHT'), { year: new Date().getFullYear() })}
        </span>
        <span>{t('FOOTER_AVAILABILITY')}</span>
      </Container>
    </footer>
  );
}
