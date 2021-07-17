import React from 'react';
import Header from '../parts/header';
import Hero from '../parts/landinghero';
import Selection from 'parts/selection';
import About from 'parts/landingabout';
import Projects from 'parts/landingprojects';
import Footer from 'parts/footer';

import landingPage from 'assets/data/LandingPage.json';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero data={landingPage.hero} />
      <Selection data={landingPage.selection} />
      <About data={landingPage.about} />
      <Projects data={landingPage.projects} />
      <Footer />
    </>
  );
}
