import React from 'react';
import SocialMedia from 'elements/socialmedia';
import Button from 'elements/button';
import './style.scss';

export default function contactForm() {
  return (
    <section className="contact__form">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#030303"
          fillOpacity="0.9"
          d="M0,288L34.3,245.3C68.6,203,137,117,206,69.3C274.3,21,343,11,411,5.3C480,0,549,0,617,10.7C685.7,21,754,43,823,69.3C891.4,96,960,128,1029,133.3C1097.1,139,1166,117,1234,117.3C1302.9,117,1371,139,1406,149.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <div className="contact__container">
        <div className="contact__left">
          <h1>Contact Us</h1>
          <div className="contact-card">
            <div className="contact-card__header">
              <h4>
                <i className="fas fa-map-marker-alt"></i>Kerabat House
              </h4>
            </div>
            <div className="contact-card__body">
              <h6>Jl. Jend H Amir Machmud, Sukawargi No. 77</h6>
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="contact__right">
          <div className="contact-card">
            <div className="contact-card__header">
              <h4>Fast Respon</h4>
            </div>
            <div className="contact-card__body">
              <h6>
                <i className="fab fa-whatsapp"></i>
                <a href="tel:+62895344020855">+62 895-3440-20855</a>
              </h6>
              <h6>
                <i className="fab fa-whatsapp"></i>
                <a href="+6289513043605">+62 895-1304-3605</a>
              </h6>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card__header">
              <h4>Contact Form</h4>
            </div>
            <div className="contact-card__body">
              <div className="form-input">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="input" />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" className="input" />
              </div>
              <div className="form-input">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="input" />
              </div>
              <Button className="btn-sendMessage">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
