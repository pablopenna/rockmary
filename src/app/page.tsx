import Header from '@/app/components/Header';
import WhoWeAre from '@/app/components/WhoWeAre';
import HowICanHelp from '@/app/components/HowWeCanHelp';
import Technologies from '@/app/components/Technologies';
import Portfolio from '@/app/components/Portfolio';
import Pricing from '@/app/components/Pricing';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-base">
      <Header />
      <WhoWeAre />
      <HowICanHelp />
      <Technologies />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
