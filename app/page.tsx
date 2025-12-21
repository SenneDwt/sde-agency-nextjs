import Header from './headerAndFooter/header';
import Footer from './headerAndFooter/footer';
// Import all components from home folder in order
import Hero from './home/hero';
import Services from './home/services';
import WhyChooseUs from './home/why-choose-us';
import ContactSection from './home/contact-section';
import Stats from './home/stats';

export default function Home() {
  return (
    <>
      <Header />
      {/* Home page sections in order */}
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </>
  );
}
