import React from 'react';
import './CardProject.css';
// import { Link } from '@mui/material';

const CardProject = ({ image, link }) => {
  return (
    <div className='cardProject'>
      <img src={image} className='cardProjectImage' alt='Project reference' />
      <button className='cardProjectButton'>
        <a href={link} rel='noopener noreferrer' target='_blank'>
          Ver más
        </a>
      </button>
    </div>
  );
};

export default CardProject;
