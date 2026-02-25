import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { getTranslation, Locale } from "../i18n";

interface HeaderProps {
  locale: Locale
}

export default function Header({ locale }: HeaderProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <header className="bg-contrast-four text-base py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Title Section */}
        <div className="flex items-center gap-6 mb-8">
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

        {/* Navigation */}
        <nav className="flex justify-between items-center">
          <ul className="hidden md:flex gap-8">
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
