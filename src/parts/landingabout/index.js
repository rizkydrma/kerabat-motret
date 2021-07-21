import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './index.scss';
import AboutBackground from 'assets/images/background/about-background.png';

export default function index({ data }) {
  return (
    <section id="about">
      <figure className="background">
        <img src={AboutBackground} alt="" className="about__background" />
      </figure>

      <Fade duration={3000} triggerOnce={true}>
        <div className="about__description" data-speed={data.speed}>
          {data.mainDescription}
          <br />
          <br />
          <span>
            {data.paragraf1}
            <br />
            <br />
            {data.paragraf2}
            <br />
            <br />
            {data.paragraf3}
          </span>
        </div>
      </Fade>
    </section>
  );
}
