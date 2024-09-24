import React from 'react';
import './CardSoftware.css';

const CardSoftware = ({ image, title, text }) => {
  return (
    <div className='cardSoftware'>
      <img src={image} className='cardSoftwareImage' alt='Software app' />
      <div className='cardSoftwareText'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardSoftware;
