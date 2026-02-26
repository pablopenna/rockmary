import { getTranslation, Locale } from "../i18n";

interface WhoWeAreProps {
  locale: Locale
}

export default function WhoWeAre({locale}: WhoWeAreProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <section id="who-am-i" className="py-8 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-8">{t("WHO_AM_I_TITLE")}</h2>
        <div className="space-y-6 text-contrast text-lg">
          <p>
            {t("WHO_AM_I_PARAGRAPH_1")}
          </p>
          <p>
            {t("WHO_AM_I_PARAGRAPH_2")}
          </p>
          <p className="mt-6">
            <span className="font-semibold">{t("WHO_AM_I_PARAGRAPH_3")}</span>{' '}
            <a 
              href="https://linkedin.com/in/pprdev/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-aux-2 hover:text-chocolate-plum underline transition"
            >
              {t("WHO_AM_I_LINK")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
