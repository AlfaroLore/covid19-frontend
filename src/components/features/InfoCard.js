import React from 'react';

const InfoCard = ({ msg, color, number }) => {
  return (
    <div class="info-card">
      <svg height="25" width="25">
        <circle cx="12" cy="12" r="6" stroke={color} stroke-width="3" fill={color} />
      </svg>
      <div class="info">
        <h1>{number}</h1>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default InfoCard;
