import React, { useEffect } from 'react';

import Header from 'parts/header';
import ContactForm from 'parts/contactForm/contactForm';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove('hidden');
  }, []);
  return (
    <>
      <Header />
      <ContactForm />
    </>
  );
}
