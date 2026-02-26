import { getTranslation, Locale } from "../i18n";

interface FooterProps {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <footer className="bg-aux-3 text-base py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('HEADER_BRAND')}</h3>
            <p className="text-base-two">
              {t('HEADER_TAGLINE')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('FOOTER_QUICK_LINKS')}</h4>
            <ul className="space-y-2 text-base-two">
              <li><a href="#who-am-i" className="hover:text-base transition">{t('HEADER_NAV_WHO')}</a></li>
              <li><a href="#how-i-can-help" className="hover:text-base transition">{t('HEADER_NAV_HELP')}</a></li>
              <li><a href="#technologies" className="hover:text-base transition">{t('HEADER_NAV_TECHNOLOGIES')}</a></li>
              <li><a href="#portfolio" className="hover:text-base transition">{t('HEADER_NAV_PORTFOLIO')}</a></li>
              <li><a href="#pricing" className="hover:text-base transition">{t('HEADER_NAV_PRICING')}</a></li>
              <li><a href="#contact" className="hover:text-base transition">{t('HEADER_NAV_CONTACT')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('CONTACT_TITLE')}</h4>
            <p className="text-base-two mb-2">
              <a href={`mailto:${t('CONTACT_EMAIL')}`} className="hover:text-base transition">
                {t('CONTACT_EMAIL')}
              </a>
            </p>
            <p className="text-base-two text-sm">{t('FOOTER_AVAILABILITY')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
