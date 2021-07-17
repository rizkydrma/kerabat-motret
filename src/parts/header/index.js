import React, { useState } from 'react';
import './index.scss';
import BrandIcon from 'parts/icontext';
import Button from 'elements/button';
import SocialMedia from 'elements/socialmedia';
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
        <div className="nav-items">
          <Button href="/" type="link">
            <img src={Logo} className="img-logo" alt="" />
          </Button>
          <BrandIcon />
          <div className="hamburger-menu" onClick={() => handleDrawer()}>
            <div className="bar"></div>
          </div>
        </div>

        <ul className={`nav-links ${drawer ? 'open' : ''} `}>
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

        <SocialMedia />
      </nav>
    </header>
  );
}
