import React from 'react';
import './index.scss';
import Button from 'elements/button';

import ImagePortfolio1 from 'assets/images/teaser-project/portfolio1.png';
import ImagePortfolio2 from 'assets/images/teaser-project/portfolio2.png';
import ImagePortfolio3 from 'assets/images/teaser-project/portfolio3.png';
import ImagePortfolio4 from 'assets/images/teaser-project/portfolio4.png';

export default function index() {
  return (
    <section id="portfolio">
      <div className="container portfolio">
        <figure className="portfolio__image portfolio__image1">
          <img src={ImagePortfolio1} alt="" />
        </figure>
        <figure className="portfolio__image portfolio__image2">
          <img src={ImagePortfolio2} alt="" />
        </figure>
        <figure className="portfolio__image portfolio__image3">
          <img src={ImagePortfolio3} alt="" />
        </figure>
        <figure className="portfolio__image portfolio__image4">
          <img src={ImagePortfolio4} alt="" />
        </figure>
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
