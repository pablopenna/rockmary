"use client" // Needed for the router

import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { getLocaleFromString, getTranslation, Locale } from "../i18n";
import { useRouter } from "next/navigation";

interface HeaderProps {
  locale: Locale
}

export default function Header({ locale }: HeaderProps) {
  const t = getTranslation.bind(null, locale);
  const router = useRouter();

  const changeLocale = (loc: Locale) => {
    let path = '/';
    if(loc !== 'en') {
      path = path + loc;
    }
    
    router.push(path);
  };

  const onLanguageSelected = (e: any) => {
    const localeInEvent = e.target.value;
    const locale = getLocaleFromString(localeInEvent);
    
    if(locale === null) {
      return;
    }

    changeLocale(locale);

    // HACK: reset select in case same language as current is selected
    e.target.value = "placeholder"
  }

  return (
    <header className="bg-contrast-four text-base py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Title Section */}
        <div className="flex justify-between gap-6 flex-col sm:flex-row sm:mb-8">
          <div className="flex items-center sm:justify-start gap-6 sm:mb-8">
            <Image 
              src={withBasePath("/logov1_3.png")}
              alt={t('HEADER_LOGO_ALT')}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-5xl font-bold text-base-two">{t('HEADER_BRAND')}</h1>
              <p className="text-lg text-base-two font-light">{t('HEADER_TAGLINE')}</p>
            </div>
          </div>

          <div className="flex gap-6 justify-end items-end sm:items-center sm:mb-8">
            <select defaultValue={"placeholder"} onChange={onLanguageSelected}>
              <option value="placeholder" disabled>{t('LANGUAGE_SELECT')}</option>
              <option value="en">{t('LANGUAGE_EN')}</option>
              <option value="es">{t('LANGUAGE_ES')}</option>
            </select>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-between items-center">
          <ul className="hidden sm:flex gap-8">
            <li><a href="#who-am-i" className="hover:text-base-two transition">{t('HEADER_NAV_WHO')}</a></li>
            <li><a href="#how-i-can-help" className="hover:text-base-two transition">{t('HEADER_NAV_HELP')}</a></li>
            <li><a href="#technologies" className="hover:text-base-two transition">{t('HEADER_NAV_TECHNOLOGIES')}</a></li>
            <li><a href="#portfolio" className="hover:text-base-two transition">{t('HEADER_NAV_PORTFOLIO')}</a></li>
            <li><a href="#pricing" className="hover:text-base-two transition">{t('HEADER_NAV_PRICING')}</a></li>
            <li><a href="#contact" className="hover:text-base-two transition">{t('HEADER_NAV_CONTACT')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
