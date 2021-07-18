import React from 'react';
import './index.scss';
import ImageBackground from 'assets/images/background/background-projects.png';

export default function ProjectHero() {
  return (
    <section className="projectHero">
      <div className="container">
        <h1 className="projectHero__title">Kerabat Projects</h1>
        <img
          src={ImageBackground}
          alt="kamera miring 45 derajat"
          className="projectHero__image"
        />
      </div>
    </section>
  );
}
