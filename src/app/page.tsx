import Header from '@/app/components/Header';
import WhoWeAre from '@/app/components/WhoWeAre';
import HowICanHelp from '@/app/components/HowWeCanHelp';
import Technologies from '@/app/components/Technologies';
import Portfolio from '@/app/components/Portfolio';
import Pricing from '@/app/components/Pricing';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import { Locale } from './i18n';


interface HomeProps {
  locale: Locale
}

export default function DefaultHome({locale = 'en'}: HomeProps) {
  

  return (
      <div className="min-h-screen bg-base">
        <Header />
        <WhoWeAre locale={locale}/>
        <HowICanHelp locale={locale}/>
        <Technologies locale={locale}/>
        <Portfolio locale={locale}/>
        <Pricing />
        <Contact />
        <Footer />
      </div>
  );
}
