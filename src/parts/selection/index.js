import React from 'react';
import Button from 'elements/button';
import './index.scss';
import ImageSelection1 from 'assets/images/selection/picture1.png';
import ImageSelection2 from 'assets/images/selection/picture2.png';
import ImageSelection3 from 'assets/images/selection/picture3.png';
import ImageSelection4 from 'assets/images/selection/picture4.png';

export default function Selection() {
  return (
    <section id="selection">
      <div className="shadow"></div>
      <div className="container selection">
        <div className="card-selection translate" data-speed="0.3">
          <figure className="wrapper-image">
            <img src={ImageSelection1} alt="" className="img-selection" />
            <figcaption>
              <Button href="/portfolio" type="link">
                Portfolio
              </Button>
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </figcaption>
          </figure>
        </div>
        <div className="card-selection translate" data-speed="0.2">
          <figure className="wrapper-image">
            <img src={ImageSelection2} alt="" className="img-selection" />
            <figcaption>
              <Button href="/pricing" type="link">
                Pricing
              </Button>
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </figcaption>
          </figure>
        </div>
        <div className="card-selection translate" data-speed="0.3">
          <figure className="wrapper-image">
            <img src={ImageSelection3} alt="" className="img-selection" />
            <figcaption>
              <Button href="/projects" type="link">
                Projects
              </Button>
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </figcaption>
          </figure>
        </div>
        <div className="card-selection translate" data-speed="0.2">
          <figure className="wrapper-image">
            <img src={ImageSelection4} alt="" className="img-selection" />
            <figcaption>
              <Button href="/our-teams" type="link">
                Our Teams
              </Button>
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
