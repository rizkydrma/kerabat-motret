import React, { useEffect } from 'react';
import Header from 'parts/header';
import ProjectHero from 'parts/projecthero';
import ListProjects from 'parts/listproject';
import Footer from 'parts/footer';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove('hidden');
  }, []);
  return (
    <>
      <Header />
      <ProjectHero />
      <ListProjects />
      <Footer />
    </>
  );
}
