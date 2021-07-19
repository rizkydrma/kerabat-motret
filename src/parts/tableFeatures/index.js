import React from 'react';
import './index.scss';

export default function TableFeatures({ data }) {
  return (
    <table className="features__table">
      <thead>
        <tr>
          <td>Feature</td>
          {data.type.map((type, i) => (
            <td key={i}>{type}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.options.map((el, i) => (
          <tr key={i}>
            <td>{Object.keys(el)}</td>
            {Object.values(el)[0].map((e, i) => {
              return (
                <td key={i}>
                  {e === true ? <i className="fas fa-check-square"></i> : ' '}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
