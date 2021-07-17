import React from 'react';
import Button from 'elements/button';
import './index.scss';

export default function Selection({ data }) {
  return (
    <section id="selection">
      <div className="shadow"></div>
      <div className="container selection">
        {data.map((selection, index) => (
          <div
            className="card-selection translate"
            data-speed={selection.speed}
            key={index}
          >
            <figure className="wrapper-image">
              <img src={selection.imageUrl} alt="" className="img-selection" />
              <figcaption>
                <Button href={selection.target} type="link">
                  {selection.name}
                </Button>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
