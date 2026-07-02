import Header from '../headerAndFooter/header';
import Footer from '../headerAndFooter/footer';
// Import all components from home folder in order
import Hero from '../home/hero';

import Activiteiten from '../home/activiteiten';
import SocialProof from '../home/social-proof';



export default function Home() {
  return (
    <>
      <Header />
      {/* Home page sections in order */}
      <Hero />
      <Activiteiten />
      <SocialProof />

      <Footer />
    </>
  );
}
