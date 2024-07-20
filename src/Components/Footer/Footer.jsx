import React from 'react';
// Components
import Container from '../Container/Container';
// Images
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// Styles
import './Footer.css';

const Footer = () => {
  return (
    <footer id='Contact' className='backgroundContact'>
      <Container>
        <div className='footer'>
          <h2>Contactar</h2>
          <div className='iconContactContainer'>
            <a
              className='iconContact'
              href='https://github.com/Alexandra-Gon'
              target='_blank'
              rel='noreferrer noopener'
            >
              <GitHubIcon />
            </a>
            <a
              className='iconContact'
              href='https://www.linkedin.com/in/alexandragon/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <LinkedInIcon />
            </a>
          </div>
          <p className='textEmail'>alexandra.gonzalez.dev@gmail.com</p>
          <p className='textCopyrights'>ALEXANDRA GONZALEZ ©2023</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
