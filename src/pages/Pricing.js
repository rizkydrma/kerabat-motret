import React, { useEffect } from 'react';

import Header from 'parts/header';
import Hero from 'parts/pricingHero';
import PricePlan from 'parts/pricePlan';
import Faq from 'parts/faq/faq';
import Footer from 'parts/footer';

import faq from 'assets/data/FAQ.json';

export default function Pricing() {
  useEffect(() => {
    window.title = 'Kerabat Motret | Pricing';
    window.scrollTo(0, 0);
    document.body.classList.remove('hidden');
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <PricePlan />
      <Faq data={faq} />
      <Footer />
    </>
  );
}
