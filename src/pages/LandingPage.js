import React from 'react';
import Header from '../parts/header';
import Hero from '../parts/landinghero';
import Selection from 'parts/selection';
import About from 'parts/landingabout';
import Projects from 'parts/landingprojects';
import Footer from 'parts/footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Selection />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
