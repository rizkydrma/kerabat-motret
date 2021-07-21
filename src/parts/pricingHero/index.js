import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './index.scss';

export default function PricingHero() {
  return (
    <section className="hero">
      <div className="container">
        <Fade duration={2000} triggerOnce={true}>
          <h1>Pricing</h1>
        </Fade>
        <Fade duration={3000} triggerOnce={true}>
          <p>
            Choose your plan and start capture every precious moment with us.
          </p>
        </Fade>
      </div>
    </section>
  );
}
