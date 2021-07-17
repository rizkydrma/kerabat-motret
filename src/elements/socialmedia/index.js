import React from 'react';
import './index.scss';
import Button from 'elements/button';

export default function index() {
  return (
    <ul className="social-media">
      <li>
        <Button
          href="https://facebook.com"
          type="link"
          target="_blank"
          isExternal
        >
          <i className="fab fa-facebook-f"></i>
        </Button>
      </li>
      <li>
        <Button
          href="https://instagram.com/kerabat_motret"
          type="link"
          target="_blank"
          isExternal
        >
          <i className="fab fa-instagram"></i>
        </Button>
      </li>
      <li>
        <Button
          href="https://twitter.com"
          type="link"
          target="_blank"
          isExternal
        >
          <i className="fab fa-twitter"></i>
        </Button>
      </li>
      <li>
        <Button
          href="https://youtube.com"
          type="link"
          target="_blank"
          isExternal
        >
          <i className="fab fa-youtube"></i>
        </Button>
      </li>
    </ul>
  );
}
