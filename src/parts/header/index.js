import React, { useState, useEffect, useCallback } from 'react';
import './index.scss';
import BrandIcon from 'parts/icontext';
import Button from 'elements/button';
import SocialMedia from 'elements/socialmedia';
import Logo from 'assets/images/logo.png';

export default function Header() {
  const [drawer, setDrawer] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
    document.body.classList.toggle('hidden');
  };

  const handleStickyNavbar = useCallback(() => {
    let nav = document.querySelector('.nav-items');
    window.scrollY > nav.getBoundingClientRect().bottom
      ? setStickyNav(true)
      : setStickyNav(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    return () => {
      window.removeEventListener('scroll', handleStickyNavbar);
    };
  }, [handleStickyNavbar]);

  return (
    <header>
      <nav>
        <div className={`nav-items ${stickyNav ? 'stickyNavbar' : ' '}`}>
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
            <Button href="/about" type="link">
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
