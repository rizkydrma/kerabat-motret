import React from 'react';
import './style.scss';

export default function Faq({ data }) {
  return (
    <section className="faq">
      <div className="container">
        <h1 className="faq__title">
          Frequently Asked
          <br />
          Questions
        </h1>
      </div>
      <div className="container">
        <div className="accordion">
          {data.faq.map((faq, i) => (
            <div
              className="accordion-item"
              id={`question${Number(i + 1)}`}
              key={i}
            >
              <a href={`#question${Number(i + 1)}`} className="accordion-link">
                {faq.question}
                <i className="fa fa-plus"></i>
                <i className="fa fa-minus"></i>
              </a>
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
