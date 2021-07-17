import React from 'react';
import './index.scss';
import ImageLogo from 'assets/images/logo.png';
import Button from 'elements/button';
import SocialMedia from 'elements/socialmedia';

export default function index() {
  return (
    <footer>
      <div className="container">
        <div className="footer__part">
          <div className="footer__part1">
            <ul>
              <li>Make a momment</li>
              <li>However small</li>
              <li>Defines an expression</li>
            </ul>
          </div>
          <div className="footer__part2">
            <ul>
              <li>
                <Button href="#" type="link">
                  Contact Us
                </Button>
              </li>
              <li>
                <Button href="#" type="link">
                  Carrers
                </Button>
              </li>
              <li>
                <Button href="#" type="link">
                  Blog
                </Button>
              </li>
              <li>
                <Button href="#" type="link">
                  Kerabat Motret
                </Button>
              </li>
              <li>
                <Button href="#" type="link">
                  Production
                </Button>
              </li>
            </ul>
          </div>
          <div className="footer__part3">
            <ul>
              <li>Jl.Jend H Amir Machmud No.77</li>
              <li>Kota Cimahi</li>
              <li>Kecamatan Cimahi Utara</li>
              <li>Jawa Barat 45013</li>
            </ul>
          </div>
        </div>
        <div className="footer__under">
          <div className="footer__under1">
            <h5>@2021 Kerabat Motret</h5>
          </div>
          <div className="footer__under2">
            <Button href="/" type="link">
              <img src={ImageLogo} alt="" className="footer__under--logo" />
            </Button>
          </div>
          <div className="footer__under3">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
}
