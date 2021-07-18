import React from 'react';
import './index.scss';
import Button from 'elements/button';

export default function LandingProjects({ data }) {
  return (
    <section id="portfolio">
      <div className="container portfolio">
        {data.listProjects.map((project, i) => (
          <figure
            className={`portfolio__image ${'portfolio__image' + Number(i + 1)}`}
            key={i}
          >
            <img src={project.imageUrl} alt={`project${i}`} />
          </figure>
        ))}
      </div>
      <div className="container under__portfolio">
        <Button href="/projects" className="button" type="link">
          <h5 className="button__more">View More</h5>
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        </Button>
      </div>
    </section>
  );
}
