import { getTranslation, Locale } from "../i18n";

interface TechnologiesProps {
  locale: Locale
}

export default function Technologies({ locale }: TechnologiesProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <section id="technologies" className="py-16 bg-base-two">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-4">{t("TECHNOLOGIES_TITLE")}</h2>
        <p className="text-lg text-contrast-two mb-12">{t("TECHNOLOGIES_PARAGRAPH")}</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend */}
          <div className="bg-base p-8 rounded-lg shadow-md border-t-4 border-aux-1">
            <h3 className="text-2xl font-bold text-contrast mb-4">{t("TECHNOLOGIES_BACKEND_TITLE")}</h3>
            <p className="text-contrast-two mb-4">
              {t("TECHNOLOGIES_BACKEND_P1")}
            </p>
            <p className="text-contrast-two">
              {t("TECHNOLOGIES_BACKEND_P2")}
            </p>
          </div>

          {/* Frontend */}
          <div className="bg-base p-8 rounded-lg shadow-md border-t-4 border-aux-2">
            <h3 className="text-2xl font-bold text-contrast mb-4">{t("TECHNOLOGIES_FRONTEND_TITLE")}</h3>
            <p className="text-contrast-two mb-4">
              {t("TECHNOLOGIES_FRONTEND_P1")}
            </p>
            <p className="text-contrast-two">
              {t("TECHNOLOGIES_FRONTEND_P2")}
            </p>
          </div>

          {/* Infrastructure */}
          <div className="bg-base p-8 rounded-lg shadow-md border-t-4 border-aux-3">
            <h3 className="text-2xl font-bold text-contrast mb-4">{t("TECHNOLOGIES_INFRA_TITLE")}</h3>
            <p className="text-contrast-two">
              {t("TECHNOLOGIES_INFRA_P1")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
