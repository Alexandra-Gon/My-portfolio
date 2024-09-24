import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Components
import Container from '../Container/Container';
// Styles
import './Navbar.css';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace('/', '');
  const [activeNav, setActiveNav] = useState(false);

  const scrollTo = (event, id) => {
    setActiveNav(false);
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    const profileSection = document.getElementById(id);

    if (profileSection) {
      const offsetPosition =
        profileSection.getBoundingClientRect().top + window.scrollY - 70;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // Para un desplazamiento suave
      });
    }
  };

  const getOptions = (route) => {
    if (route !== 'proyectos') {
      return (
        <>
          <li>
            <a href='#Home'>Inicio</a>
          </li>
          <li>
            <a href='#Profile' onClick={(e) => scrollTo(e, 'Profile')}>
              Perfil
            </a>
          </li>
          <li>
            <a href='#Skills' onClick={(e) => scrollTo(e, 'Skills')}>
              Software
            </a>
          </li>
          <li>
            <a href='#Experience' onClick={(e) => scrollTo(e, 'Experience')}>
              Experiencia
            </a>
          </li>
          <li>
            <a href='#contact' onClick={() => setActiveNav(false)}>
              Contacto
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to='/' onClick={() => setActiveNav(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <a href='#projects' onClick={(e) => scrollTo(e, 'projects')}>
              Proyectos
            </a>
          </li>
          <li>
            <a href='#contact' onClick={() => setActiveNav(false)}>
              Contacto
            </a>
          </li>
        </>
      );
    }
  };

  console.log(activeNav);

  return (
    <nav className='nav'>
      <Container className='navMobile'>
        {!activeNav && (
          <button onClick={() => setActiveNav(!activeNav)}>
            <MdMenu />
          </button>
        )}
      </Container>
      {activeNav && (
        <div className='navMobileMenu'>
          <button onClick={() => setActiveNav(false)}>
            <IoMdClose />
          </button>
          <ul>{getOptions(currentPath)}</ul>
        </div>
      )}

      <Container className='navDesktop'>
        <ul>{getOptions(currentPath)}</ul>
      </Container>
    </nav>
  );
};

export default Navbar;
