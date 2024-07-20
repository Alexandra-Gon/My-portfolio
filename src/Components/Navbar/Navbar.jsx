import React from 'react';
// Components
import Container from '../Container/Container';
// Styles
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <Container>
        <ul className='navBar'>
          <li>
            <a href='#Home'>Inicio</a>
          </li>
          <li>
            <a href='#Profile'>Perfil</a>
          </li>
          <li>
            <a href='#Skills'>Habilidades</a>
          </li>
          <li>
            <a href='#Projects'>Proyectos</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
