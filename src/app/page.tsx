import Header from './components/Header';
import WhoWeAre from './components/WhoWeAre';
import HowICanHelp from './components/HowWeCanHelp';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
