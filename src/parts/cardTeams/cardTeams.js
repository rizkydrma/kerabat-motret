import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link
              to={{ pathname: 'https://instagram.com/andresaktiyanto' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-team">
                <img
                  src="images/card-teams/andre-min.jpg"
                  alt="andre"
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
                <div className="meta-wrapper">
                  <h3>Andre Saktyanto.</h3>
                  <h6>Co Founder & Business Development</h6>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to={{ pathname: 'https://instagram.com/zraldn' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-team">
                <img
                  src="images/card-teams/azhar-min.jpg"
                  alt="azhar"
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
                <div className="meta-wrapper">
                  <h3>Azhar Alaudin.</h3>
                  <h6>Co Founder & Project Manager</h6>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to={{ pathname: 'https://instagram.com/rizkydrma' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-team">
                <img
                  src="images/card-teams/rizky-min.jpg"
                  alt="rizky"
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
                <div className="meta-wrapper">
                  <h3>Rizky Darma R.</h3>
                  <h6>Co Founder & Head Of Design</h6>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to={{ pathname: 'https://instagram.com/vieryazharul' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-team" id="slide4">
                <img
                  src="images/card-teams/viery-min.jpg"
                  alt="viery"
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
                <div className="meta-wrapper">
                  <h3>Viery Azharul H.</h3>
                  <h6>Co Founder & Managing Director</h6>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
