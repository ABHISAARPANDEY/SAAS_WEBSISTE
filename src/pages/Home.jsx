import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import MarketplaceSection from '../components/MarketplaceSection';
import FreeToolsSection from '../components/FreeToolsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <MarketplaceSection />
      <FreeToolsSection />
    </>
  );
};

export default Home;