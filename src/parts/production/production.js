import React from 'react';
import Button from 'elements/button';
import { Fade } from 'react-awesome-reveal';
import './style.scss';

export default function production({ data }) {
  return (
    <section className="production">
      <div className="container">
        {data.map((production, i) => (
          <Fade key={i}>
            <div className="production__card">
              <figure className="img-wrapper">
                <img
                  src={production.imageUrl}
                  alt={production.name}
                  className="img-cover"
                />
              </figure>
            </div>
            <div className="production__meta-wrapper">
              <h5>{production.name}</h5>
              <p>{production.description}</p>

              <Button
                className="production__button"
                type="link"
                href="/production"
              >
                See Details
              </Button>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
