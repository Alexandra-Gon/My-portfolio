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
            <a href='#Home'>Home</a>
          </li>
          <li>
            <a href='#Profile'>Profile</a>
          </li>
          <li>
            <a href='#Skills'>Skills</a>
          </li>
          <li>
            <a href='#Projects'>Projects</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
