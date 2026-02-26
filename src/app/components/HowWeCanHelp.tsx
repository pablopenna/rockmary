import { getTranslation, Locale } from "../i18n";

interface HowICanHelpProps {
  locale: Locale
}

export default function HowICanHelp({ locale }: HowICanHelpProps) {
  const t = getTranslation.bind(null, locale);

  const services = [
    {
      title: t("HOW_I_CAN_HELP_SERVICE_REFINE_TITLE"),
      description: t("HOW_I_CAN_HELP_SERVICE_REFINE_DESC")
    },
    {
      title: t("HOW_I_CAN_HELP_SERVICE_BUILD_TITLE"),
      description: t("HOW_I_CAN_HELP_SERVICE_BUILD_DESC")
    },
    {
      title: t("HOW_I_CAN_HELP_SERVICE_SUPPORT_TITLE"),
      description: t("HOW_I_CAN_HELP_SERVICE_SUPPORT_DESC")
    }
  ];

  return (
    <section id="how-i-can-help" className="py-16 bg-base-two">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-4">{t("HOW_I_CAN_HELP_TITLE")}</h2>
        <p className="text-lg text-contrast-two mb-12">{t("HOW_I_CAN_HELP_PARAGRAPH")}</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className={`bg-base p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-aux-${index+1}`}>
              <h3 className="text-xl font-bold text-contrast mb-4">{service.title}</h3>
              <p className="text-contrast-two">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-contrast mb-4">{t("HOW_I_CAN_HELP_CTA_PREFIX")} <a href="#contact" className="text-aux-2 hover:text-chocolate-plum underline">{t("HOW_I_CAN_HELP_CTA_LINK")}</a></p>
        </div>
      </div>
    </section>
  );
}
