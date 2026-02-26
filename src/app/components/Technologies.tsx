import { getTranslation, Locale } from "../i18n";

interface TechnologiesProps {
  locale: Locale
}

interface TechnologyIconProps {
  imgName: string,
  imgSrc: string,
}

const BACKEND_ICONS: Array<TechnologyIconProps> = [
  {imgName: 'Java', imgSrc: '/Java_cropped.png'},
  {imgName: 'Kotlin', imgSrc: '/Kotlin.png'},
];

const FRONTEND_ICONS: Array<TechnologyIconProps> = [
  {imgName: 'Javascript', imgSrc: '/Javascript.png'},
  {imgName: 'Typescript', imgSrc: '/Typescript.png'},
  {imgName: 'Node.js', imgSrc: '/Node.png'},
  {imgName: 'React', imgSrc: '/React.png'},
  {imgName: 'SAPUI5', imgSrc: '/sapui5.png'},
];

const INFRA_ICONS: Array<TechnologyIconProps> = [
  {imgName: 'AWS', imgSrc: '/AWS.png'},
  {imgName: 'CDK', imgSrc: '/CDK.png'},
];

const OTHERS_ICONS: Array<TechnologyIconProps> = [
  {imgName: 'C', imgSrc: '/C.png'},
  {imgName: 'C++', imgSrc: '/C++.png'},
  {imgName: 'Rust', imgSrc: '/Rust.png'},
  {imgName: 'Python', imgSrc: '/Python.png'},
  {imgName: 'Godot', imgSrc: '/Godot.png'},
];

function TechnologyIcon({imgName, imgSrc}: TechnologyIconProps) {
  return (
    <div className="w-full h-16 flex items-center justify-center bg-white/5 p-2 rounded">
      <img src={imgSrc} alt={imgName} className="max-h-full max-w-full object-contain" />
    </div>
  )
}

export default function Technologies({ locale }: TechnologiesProps) {
  const t = getTranslation.bind(null, locale);

  return (
    <section id="technologies" className="py-16 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-4">{t("TECHNOLOGIES_TITLE")}</h2>
        <p className="text-lg text-contrast-two mb-12">{t("TECHNOLOGIES_PARAGRAPH")}</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend */}
          <div className="bg-base-two p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-aux-1">
            <h3 className="text-2xl font-bold text-contrast mb-4">{t("TECHNOLOGIES_BACKEND_TITLE")}</h3>
            <p className="text-contrast-two mb-4" dangerouslySetInnerHTML={{__html: t("TECHNOLOGIES_BACKEND_P1")}}/>
            <p className="text-contrast-two" dangerouslySetInnerHTML={{__html: t("TECHNOLOGIES_BACKEND_P2")}}/>
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-4">
                {BACKEND_ICONS.map((i, idx) => (
                  <TechnologyIcon key={idx} imgName={i.imgName} imgSrc={i.imgSrc}/>
                ))}
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-base-two p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-aux-2">
            <h3 className="text-2xl font-bold text-contrast mb-4">{t("TECHNOLOGIES_FRONTEND_TITLE")}</h3>
            <p className="text-contrast-two mb-4" dangerouslySetInnerHTML={{__html: t("TECHNOLOGIES_FRONTEND_P1")}}/>
            <p className="text-contrast-two" dangerouslySetInnerHTML={{__html: t("TECHNOLOGIES_FRONTEND_P2")}}/>
            <div className="mt-6">
              {/* 
                https://v3.tailwindcss.com/docs/responsive-design#targeting-mobile-screens
                Use unprefixed utilities to target mobile, and override them at larger breakpoints.
              */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {FRONTEND_ICONS.map((i, idx) => (
                  <TechnologyIcon key={idx} imgName={i.imgName} imgSrc={i.imgSrc}/>
                ))}
              </div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="bg-base-two p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-aux-3">
            <h3 className="text-2xl font-bold text-contrast mb-4">{t("TECHNOLOGIES_INFRA_TITLE")}</h3>
            <p className="text-contrast-two" dangerouslySetInnerHTML={{__html: t("TECHNOLOGIES_INFRA_P1")}}/>
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-4">
                {INFRA_ICONS.map((i, idx) => (
                  <TechnologyIcon key={idx} imgName={i.imgName} imgSrc={i.imgSrc}/>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-base-two p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-aux-4">
          <h3 className="text-2xl font-bold text-contrast mb-4">{t("TECHNOLOGIES_PERSONAL_TITLE")}</h3>
          <p className="text-contrast-two mb-4" dangerouslySetInnerHTML={{__html: t("TECHNOLOGIES_PERSONAL_P1")}}/>
          <div className="mt-6">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {OTHERS_ICONS.map((i, idx) => (
                <TechnologyIcon key={idx} imgName={i.imgName} imgSrc={i.imgSrc}/>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
