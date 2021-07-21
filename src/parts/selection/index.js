import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from 'elements/button';
import './index.scss';

export default function Selection({ data }) {
  return (
    <section id="selection">
      <div className="shadow"></div>
      <div className="container selection">
        {data.map((selection, i) => (
          <Fade key={i} duration={1500 * Number(i + 1)} triggerOnce={true}>
            <div
              className="card-selection translate"
              data-speed={selection.speed}
            >
              <figure className="wrapper-image">
                <img
                  src={selection.imageUrl}
                  alt=""
                  className="img-selection"
                />
                <figcaption>
                  <Button href={selection.target} type="link">
                    {selection.name}
                  </Button>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </figcaption>
              </figure>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
