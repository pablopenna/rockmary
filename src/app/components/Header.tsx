import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";
import { getTranslation, Locale } from "../i18n";
import { ButtonLink, Container, cx } from "./ui";

interface HeaderProps {
  locale: Locale
}

const navItems = [
  { href: "#ai", key: "NAV_AI" },
  { href: "#services", key: "NAV_SERVICES" },
  { href: "#stack", key: "NAV_STACK" },
  { href: "#work", key: "NAV_WORK" },
  { href: "#pricing", key: "NAV_PRICING" },
];

const languages: { locale: Locale; href: string; labelKey: string; nameKey: string }[] = [
  { locale: "en", href: "/", labelKey: "COMMON_LANG_EN", nameKey: "COMMON_LANG_EN_NAME" },
  { locale: "es", href: "/es", labelKey: "COMMON_LANG_ES", nameKey: "COMMON_LANG_ES_NAME" },
];

const focusRing =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-plum";

export default function Header({ locale }: HeaderProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <header className="border-b border-contrast/12">
      <a
        href="#main"
        className="sr-only rounded-full bg-contrast px-5 py-3 font-medium text-white focus:not-sr-only focus:fixed focus:px-5 focus:py-3 focus:left-4 focus:top-4 focus:z-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate-plum"
      >
        {t('COMMON_SKIP_TO_CONTENT')}
      </a>
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <a href="#top" className={cx("flex min-w-0 items-center gap-3 text-contrast no-underline", focusRing)}>
          <Image
            src={withBasePath("/logov1_3.png")}
            alt=""
            width={34}
            height={38}
            className="h-[38px] w-[34px] flex-none object-contain"
          />
          <span className="flex min-w-0 flex-col leading-[1.1]">
            <span className="font-display text-[20px] font-bold tracking-[-0.02em]">Rockmary</span>
            <span className="text-[12px] text-contrast-two">{t('NAV_TAGLINE')}</span>
          </span>
        </a>

        <nav aria-label={t('COMMON_NAV_LABEL')} className="min-w-0 max-w-full">
          <ul className="m-0 flex list-none flex-wrap items-center gap-x-2.5 gap-y-1 p-0 text-[15px] font-medium min-[360px]:gap-x-4 sm:gap-x-[26px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cx(
                    "inline-flex min-h-11 items-center text-contrast-two no-underline transition-colors hover:text-chocolate-plum",
                    focusRing
                  )}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
            <li>
              <span role="group" aria-label={t('COMMON_LANG_LABEL')} className="flex items-center gap-1.5 text-[13px] text-contrast-two">
                {languages.map((lang, i) => {
                  const current = lang.locale === locale;
                  const name = t(lang.nameKey);
                  return (
                    <span key={lang.locale} className="flex items-center gap-1.5">
                      {i > 0 && <span aria-hidden="true">/</span>}
                      <Link
                        href={lang.href}
                        hrefLang={lang.locale}
                        lang={lang.locale}
                        aria-label={name}
                        title={name}
                        aria-current={current ? "page" : undefined}
                        className={cx(
                          "inline-flex min-h-11 items-center no-underline transition-colors hover:text-chocolate-plum",
                          current ? "font-semibold text-contrast" : "text-contrast-two",
                          focusRing
                        )}
                      >
                        {t(lang.labelKey)}
                      </Link>
                    </span>
                  );
                })}
              </span>
            </li>
            <li>
              <ButtonLink href="#contact" variant="dark" size="sm">
                {t('NAV_HIRE')}
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
