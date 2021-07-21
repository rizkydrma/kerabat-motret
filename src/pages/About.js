import React, { useEffect } from 'react';
import Header from 'parts/header';
import Hero from 'parts/aboutHero/aboutHero';
import CardTeams from 'parts/cardTeams/cardTeams';
import Footer from 'parts/footer';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove('hidden');
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <CardTeams />
      <Footer />
    </>
  );
}
