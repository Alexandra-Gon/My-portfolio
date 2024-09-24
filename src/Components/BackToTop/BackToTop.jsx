import React from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import './BackToTop.css';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button className='backToTop' onClick={scrollToTop}>
      <KeyboardDoubleArrowUpIcon />
    </button>
  );
};

export default BackToTop;
