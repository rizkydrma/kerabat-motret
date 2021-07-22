import React from 'react';
import Header from 'parts/header';
import Button from 'elements/button';

export default function PageNotFound() {
  return (
    <>
      <Header />
      <section
        className="page-not-found"
        style={{ minHeight: '100vh', width: '100%' }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="wrapper" style={{ textAlign: 'center' }}>
            <i
              class="fas fa-exclamation"
              style={{ fontSize: '2rem', color: '#fff' }}
            ></i>
            <h1 style={{ fontSize: '2rem', color: '#fff' }}>
              Opss! Sepertinya Belum Ada Data
            </h1>

            <Button
              type="link"
              href="/projects"
              className="btn__back"
              style={{ color: '#fff', fontSize: '1.2rem' }}
            >
              <i
                class="fas fa-arrow-alt-circle-left"
                style={{ marginRight: '10px' }}
              ></i>
              Go Back
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
