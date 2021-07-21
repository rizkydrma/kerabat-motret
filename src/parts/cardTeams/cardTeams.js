import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import './style.scss';

SwiperCore.use([Navigation]);

export default function cardTeams() {
  return (
    <section className="our-teams">
      <h1>Our Teams</h1>
      <div className="container-fluid__teams">
        <Swiper
          spaceBetween={40}
          navigation
          slidesPerView={1}
          breakpoints={{
            468: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="card-team">
              <div className="meta-wrapper">
                <h3>Andre Saktyanto.</h3>
                <h6>Co Founder & Business Development</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-team">
              <div className="meta-wrapper">
                <h3>Azhar Alaudin.</h3>
                <h6>Co Founder & Project Manager</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-team">
              <div className="meta-wrapper">
                <h3>Rizky Darma R.</h3>
                <h6>Co Founder & Head Of Design</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-team" id="slide4">
              <div className="meta-wrapper">
                <h3>Viery Azharul H.</h3>
                <h6>Co Founder & Managing Director</h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
