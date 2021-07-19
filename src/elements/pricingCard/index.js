import React from 'react';
import './index.scss';

export default function CardPricing(props) {
  const className = ['plan__card'];
  if (props.isMainCard) className.push('card__main');
  if (props.isSubCard) className.push('card__sub');

  if (props.isMainCard) {
    return (
      <div className={className.join(' ')}>
        <div className="card-header">
          <i className="fas fa-gem gem gem--main"></i>
          <div className="icon">
            <div className="tooltip">not include rent a place</div>
            <span>
              <i className="fas fa-info-circle info info--main"></i>
            </span>
          </div>
        </div>
        <div className="card-body card-body--main">
          <h1 className="card__title">{props.data.type}</h1>
          <div className="price">
            <h5 className="currency">Rp.</h5>
            <h1 className="price__detail">{props.data.price}</h1>
          </div>
          <button className="btn__get-started btn__get-started--main">
            Get Started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={className.join(' ')}>
      <div className="card-header">
        <i className="fas fa-gem gem"></i>
        <div className="icon">
          <div className="tooltip">not include rent a place</div>
          <span>
            <i className="fas fa-info-circle info"></i>
          </span>
        </div>
      </div>
      <div className="card-body">
        <h1 className="card__title">{props.data.type}</h1>
        <div className="price">
          <h5 className="currency">Rp.</h5>
          <h1 className="price__detail">{props.data.price}</h1>
        </div>
        <button className="btn__get-started">Get Started</button>
      </div>
    </div>
  );
}
