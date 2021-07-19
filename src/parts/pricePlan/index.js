import React, { useState } from 'react';
import './index.scss';
import TableFeatures from 'parts/tableFeatures';
import Button from 'elements/button';
import PricingCard from 'elements/pricingCard';
import pricing from 'assets/data/Pricing.json';

export default function PricePlan() {
  const dataPricing = pricing.pricing;
  const dataFeatures = pricing.features;

  const [isActive, setIsActive] = useState('Couple');
  const [listPricing, setListPricing] = useState(
    dataPricing.find((pricing) => pricing.planName === 'Couple'),
  );
  const [features, setFeatures] = useState(
    dataFeatures.find((feature) => feature.featuresName === 'Couple'),
  );

  const handleViewPricing = (param) => {
    setListPricing(dataPricing.find((pricing) => pricing.planName === param));
    setFeatures(dataFeatures.find((feature) => feature.featuresName === param));
    setIsActive(param);
  };

  return (
    <>
      <section className="plan">
        <div className="container">
          <div className="business-plan">
            <Button
              className={`btn-plan ${isActive === 'Couple' ? 'active' : ''}`}
              onClick={() => handleViewPricing('Couple')}
            >
              Couple
            </Button>
            <Button
              className={`btn-plan ${
                isActive === 'Engagement' ? 'active' : ''
              }`}
              onClick={() => handleViewPricing('Engagement')}
            >
              Engagement
            </Button>
            <Button
              className={`btn-plan ${isActive === 'Wedding' ? 'active' : ''}`}
              onClick={() => handleViewPricing('Wedding')}
            >
              Wedding
            </Button>
            <Button
              className={`btn-plan ${isActive === 'Product' ? 'active' : ''}`}
              onClick={() => handleViewPricing('Product')}
            >
              Product
            </Button>
            <Button
              className={`btn-plan ${isActive === 'Other' ? 'active' : ''}`}
              onClick={() => handleViewPricing('Other')}
            >
              Other
            </Button>
          </div>
        </div>
        <div className="container container__card">
          {listPricing.options.map((pricing, i) => {
            if (listPricing.options.length > 2) {
              if (i === 1) {
                return <PricingCard isMainCard key={i} data={pricing} />;
              } else {
                return <PricingCard isSubCard key={i} data={pricing} />;
              }
            }
            return <PricingCard isMainCard key={i} data={pricing} />;
          })}
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h1 className="features__title">Features</h1>
          <p className="features__sub-title">
            enjoy the unique feature on every plan.
          </p>
        </div>
        <div className="container">
          <TableFeatures data={features} />
        </div>
      </section>
    </>
  );
}
