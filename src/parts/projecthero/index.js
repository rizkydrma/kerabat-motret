import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './index.scss';
import ImageBackground from 'assets/images/background/background-projects.png';

export default function ProjectHero() {
  return (
    <section className="projectHero">
      <div className="container">
        <Fade duration={2000} triggerOnce={true} direction={'left'}>
          <h1 className="projectHero__title">Kerabat Projects</h1>
        </Fade>
        <Fade duration={2500} triggerOnce={true} direction={'right'}>
          <img
            src={ImageBackground}
            alt="kamera miring 45 derajat"
            className="projectHero__image"
          />
        </Fade>
      </div>
    </section>
  );
}
