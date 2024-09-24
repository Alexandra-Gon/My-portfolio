import React from 'react';
import './FooterContact.css';
import { SlEnvolope } from 'react-icons/sl';

const FooterContact = () => {
  const handleClick = () => {
    const email = 'alexandra.gonzalez.dev@gmail.com';

    const subject = 'Consulta sobre tu perfil';
    const body = 'Hola, hablemos sobre tus habilidades.';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <footer id='contact' className='footerContact'>
      <div className='textFooterContact'>
        <p>Ponte en contacto</p>
        <h2>¡Hablemos!</h2>
      </div>
      <button onClick={handleClick} className='buttonContact'>
        alexandra.gonzalez.dev@gmail.com
        <SlEnvolope />
      </button>
    </footer>
  );
};

export default FooterContact;
