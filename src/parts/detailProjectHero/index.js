import React, { useEffect } from 'react';
import './index.scss';

export default function DetailProjectHero({ data }) {
  useEffect(() => {
    const container = document.querySelector('.container-fluid');
    container.style.backgroundImage = `url(${data.imageUrl})`;
  });
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="meta-wrapper">
          <h2>{data.name}</h2>
          <p>{data.place}</p>
        </div>
      </div>
    </section>
  );
}
