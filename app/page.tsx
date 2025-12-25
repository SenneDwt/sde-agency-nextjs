import Header from './headerAndFooter/header';
import Footer from './headerAndFooter/footer';
// Import all components from home folder in order
import Hero from './home/hero';

import WhyChooseUs from './home/why-choose-us';
import ContactSection from './home/contact-section';
import Stats from './home/stats';
import Activiteiten from './home/activiteiten';


export default function Home() {
  return (
    <>
      <Header />
      {/* Home page sections in order */}
      <Hero />
      <Activiteiten />
      <Stats />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </>
  );
}
