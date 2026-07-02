import Header from './headerAndFooter/header';
import Footer from './headerAndFooter/footer';
// Import all components from home folder in order
import Hero from './home/hero';

import WhyChooseUs from './home/why-choose-us';
import ContactSection from './home/contact-section';
import Activiteiten from './home/activiteiten';
import Voorbeelden from './home/voorbeelden';


export default function Home() {
  return (
    <>
      <Header />
      {/* Home page sections in order */}
      <Hero />
      <Activiteiten />
      <Voorbeelden />
      <WhyChooseUs />

      <ContactSection />
      <Footer />
    </>
  );
}
