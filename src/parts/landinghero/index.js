import React, { useEffect, useCallback } from 'react';
import { Fade } from 'react-awesome-reveal';
import './index.scss';
import Mountain1 from 'assets/images/background/mountain-1.png';
import Mountain2 from 'assets/images/background/mountain-2.png';

export default function LandingHero(props) {
  const handleScroll = useCallback(() => {
    const translate = document.querySelectorAll('.translate');
    let scroll = window.pageYOffset;

    translate.forEach((element) => {
      let speed = element.dataset.speed;
      element.style.transform = `translateY(${scroll * speed}px)`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="landing-hero">
      <h1 className="big-title translate" data-speed="0.7">
        {props.data.title}
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
