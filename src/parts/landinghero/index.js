import React from 'react';
import './index.scss';
import Mountain1 from 'assets/images/background/mountain-1.png';
import Mountain2 from 'assets/images/background/mountain-2.png';

export default function LandingHero() {
  return (
    <div className="landing-hero">
      <h1 className="big-title translate" data-speed="0.7">
        Kerabat Motret.
      </h1>

      <img
        src={Mountain1}
        className="mountain1 translate"
        alt=""
        data-speed="-0.1"
      />
      <img
        src={Mountain2}
        className="mountain2 translate"
        alt=""
        data-speed="0.4"
      />
    </div>
  );
}
