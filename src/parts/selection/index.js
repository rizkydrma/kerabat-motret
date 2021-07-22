import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from 'elements/button';
import './index.scss';

export default function Selection({ data }) {
  return (
    <section id="selection">
      <div className="shadow"></div>
      <div className="container selection translate" data-speed="0.2">
        {data.map((selection, i) => (
          <Fade key={i} duration={500 * Number(i + 1)} triggerOnce={true}>
            <Button href={selection.target} type="link">
              <div className="card-selection">
                <figure className="wrapper-image">
                  <img
                    src={selection.imageUrl}
                    alt=""
                    className="img-selection"
                  />
                  <figcaption>
                    {selection.name}

                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                  </figcaption>
                </figure>
              </div>
            </Button>
          </Fade>
        ))}
      </div>
    </section>
  );
}
