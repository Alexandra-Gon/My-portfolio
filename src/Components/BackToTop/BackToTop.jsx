import React from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import './BackToTop.css'

const BackToTop = () => {
  return (
    <div className='backToTop'>
      <a href='#Home'>
        <KeyboardDoubleArrowUpIcon />
      </a>
    </div>
  );
};

export default BackToTop;
