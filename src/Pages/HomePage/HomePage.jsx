import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import Container from '../../Components/Container/Container';
import CardSoftware from '../../Components/CardSoftware/CardSoftware';
//Images
import photo1 from '../../images/photo1.webp';
import proyectosMobile from '../../images/projectsImages/proyectosMobile.png';
import proyectosDesktop from '../../images/projectsImages/proyectosDesktop.png';
// Services
import softwareList from '../../services/softwareList';
// Styles
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='home'>
      <header id='Home' className='header'>
        <Container className='headerPresentation'>
          <img
            className='imgPresentation'
            src={photo1}
            alt='Presentation'
            loading='lazy'
          />
          <div className='textPresentation'>
            <h1 className='headerName'>Alexandra Gonzalez</h1>
            <p className='headerProfession'>
              Diseñadora UX/UI & Desarrolladora Frontend
            </p>
          </div>
        </Container>
      </header>

      <section id='Profile' className='sectionBackgroundProfile'>
        <Container className='subsection'>
          <h2 className='profileTitle'>Acerca de mí</h2>
          <div className='profileContainer'>
            <div className='textProfileContainer'>
              <h3>Soy una apasionada por el mundo digital</h3>
              <div>
                <p className='textProfile'>
                  Soy <b>Diseñadora UX/UI</b> y <b>Desarrolladora Frontend</b>{' '}
                  con experiencia en la creación de soluciones digitales que
                  combinan creatividad, estética y funcionalidad. A lo largo de
                  mis proyectos, he logrado adaptar la
                  tecnología a las necesidades específicas de cada cliente, con un enfoque centrado en el desarrollo de productos que no solo
                  alcancen los objetivos comerciales, sino que también
                  proporcionen experiencias memorables y satisfactorias a los
                  usuarios.
                </p>
                <br />
                <p className='textProfile'>
                  Soy una persona muy entusiasta y creativa, y siempre busco nuevos desafíos y oportunidades para
                  continuar creciendo en el ámbito del diseño y desarrollo web.
                </p>
              </div>
            </div>
            <div className='profileSkills'>
              <h3>Habilidades</h3>
              <ul className='profileSkillstext'>
                <li>Diseño UX/UI</li>
                <li>Diseño de interacción</li>
                <li>Arquitectura de la información</li>
                <li>Sistemas de diseño</li>
                <li>Enfoque analítico</li>
                <li>Creatividad</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id='Skills' className='sectionBackgroundSkills'>
        <Container className='subsection'>
          <h2 className='softwareTitle'>Software</h2>
          <div className='containerCardSoftware'>
            {softwareList().map((element, i) => {
              return (
                <CardSoftware
                  image={element.image}
                  title={element.title}
                  text={element.text}
                  key={i}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <section id='Experience' className='sectionBackgroundExperience'>
        <Container className='subsection'>
          <div className='sectionExperience'>
            <h2 className='experienceTitle'>Experiencia</h2>
            <p>
              He diseñado y desarrollado una variedad de sitios web que facilitan la
              comunicación y la interacción con el público de manera eficiente y
              amigable. Mi experiencia incluye la creación de plataformas de
              servicios, páginas de aterrizaje (landing pages) y sitios web
              comerciales con ofertas de productos.
            </p>
            <div className='experienceContainer'>
              <div className='imageAndLinkExperienceContainer'>
                <picture>
                  <source srcSet={proyectosMobile} media='(max-width: 767px)' />
                  <source
                    srcSet={proyectosDesktop}
                    media='(min-width: 768px)'
                  />
                  <img
                    src={proyectosDesktop}
                    className='imageResponsiveExperience'
                    alt='Imagen que contiene tres proyectos realizados'
                  />
                </picture>
                <Link to='/proyectos' className='experienceLink'>
                  Ver proyectos
                </Link>
              </div>

              <div className='applicationExperience'>
                <p>Diseño y prototipado</p>
                <p>Diseño y desarrollo</p>
                <p>Rediseño de interfaz</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
