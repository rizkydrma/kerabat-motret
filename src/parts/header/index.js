import React, { useState } from 'react';
import './index.scss';
import BrandIcon from 'parts/icontext';
import Button from 'elements/button';
import Logo from 'assets/images/logo.png';

export default function Header() {
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
    document.body.classList.toggle('hidden');
  };

  return (
    <header>
      <nav>
        <div class="nav-items">
          <Button href="" type="link">
            <img src={Logo} class="img-logo" alt="" />
          </Button>
          <BrandIcon />
          <div class="hamburger-menu" onClick={() => handleDrawer()}>
            <div class="bar"></div>
          </div>
        </div>

        <ul class={`nav-links ${drawer ? 'open' : ''} `}>
          <li>
            <Button href="/about-us" type="link">
              About Us
            </Button>
          </li>
          <li>
            <Button href="/projects" type="link">
              Projects
            </Button>
          </li>
          <li>
            <Button href="/pricing" type="link">
              Pricing
            </Button>
          </li>
          <li>
            <Button href="/contact" type="link">
              Contact
            </Button>
          </li>
        </ul>

        <ul class="social-media">
          <li>
            <Button
              href="https://facebook.com"
              type="link"
              target="_blank"
              isExternal
            >
              <i class="fab fa-facebook-f"></i>
            </Button>
          </li>
          <li>
            <Button
              href="https://instagram.com/kerabat_motret"
              type="link"
              target="_blank"
              isExternal
            >
              <i class="fab fa-instagram"></i>
            </Button>
          </li>
          <li>
            <Button
              href="https://twitter.com"
              type="link"
              target="_blank"
              isExternal
            >
              <i class="fab fa-twitter"></i>
            </Button>
          </li>
          <li>
            <Button
              href="https://youtube.com"
              type="link"
              target="_blank"
              isExternal
            >
              <i class="fab fa-youtube"></i>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
