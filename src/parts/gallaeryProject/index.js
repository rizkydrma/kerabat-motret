import React from 'react';
import './index.scss';

export default function GallaeryProject({ data }) {
  return (
    <div className="hero__containers">
      {data.galleryImages.map((dataImage, i) => {
        let random1 = Math.round(Math.random() * 3 + 1);
        let random2 = Math.round(Math.random() * 2 + 1);
        return (
          <div
            className={`gallery-container w-${random1} h-${random2}`}
            key={i}
          >
            <div className="gallery-item">
              <div className="image">
                <img src={dataImage} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
