import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Facts from '@/app/components/Facts';
import AiSection from '@/app/components/AiSection';
import Services from '@/app/components/Services';
import Technologies from '@/app/components/Technologies';
import Portfolio from '@/app/components/Portfolio';
import Pricing from '@/app/components/Pricing';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import BackToTop from '@/app/components/BackToTop';
import { Locale } from './i18n';

interface HomeProps {
  locale?: Locale;
}

export default function DefaultHome({ locale = 'en' }: HomeProps) {
  return (
    <div lang={locale} className="min-h-screen bg-base-two font-sans text-contrast">
      <Header locale={locale} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero locale={locale} />
        <Facts locale={locale} />
        <AiSection locale={locale} />
        <Services locale={locale} />
        <Technologies locale={locale} />
        <Portfolio locale={locale} />
        <Pricing locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      <BackToTop locale={locale} />
    </div>
  );
}
