import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Header from 'parts/header';
import Hero from 'parts/detailProjectHero';
import Gallery from 'parts/gallaeryProject';
import Footer from 'parts/footer';
import projects from 'assets/data/Projects.json';

export default function DetailProject() {
  const { id } = useParams();
  const dataProjects = projects.projects;

  const detailProject = dataProjects.find(
    (project) => Number(project.id) === Number(id),
  );

  useEffect(() => {
    window.title = 'Detail Project';
    window.scrollTo(0, 0);
    document.body.classList.remove('hidden');
  }, []);

  if (detailProject.galleryImages !== undefined) {
    return (
      <>
        <Header />
        <Hero data={detailProject} />
        <Gallery data={detailProject} />
        <Footer />
      </>
    );
  } else {
    return <Redirect to="/pagenotfound" />;
  }
}
