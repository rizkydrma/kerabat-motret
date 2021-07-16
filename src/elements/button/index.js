/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';

export default function index(props) {
  const className = [props.className];

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link to={props.href} className={className.join(' ')}>
          {props.children}
        </Link>
      );
    }
  }

  return <button className={className.join(' ')}>{props.children}</button>;
}
