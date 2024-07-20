import './HomePage.css';
// Components
import Container from '../../Components/Container/Container';
// Carousel
import CarouselProjects from '../../Components/CarouselProjects/CarouselProjects';
//Images
import profile from '../../images/profile.webp';
import photo1 from '../../images/photo1.webp';

// Icons Technologies
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { MdOutlinePhonelink } from 'react-icons/md';
import { IoLogoFirebase } from 'react-icons/io5';
import boostrapicon from '../../images/logosTechnologies/bootstrapicon.png';
import { FaWordpressSimple } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';

const HomePage = () => {
  return (
    <main>
      <header className='header'>
        <Container>
          <section id='Home' className='headerPresentation'>
            <img
              className='imgPresentation'
              src={photo1}
              alt='Presentation'
              loading='lazy'
            />
            <h1 className='headerName'>ALEXANDRA GONZALEZ</h1>
            <h2 className='headerProfession'>
             <b>Desarrolladora Web</b>
            </h2>
          </section>
        </Container>
      </header>

      <section id='Profile' className='sectionBackgroundProfile'>
        <Container>
          <div className='profileContainer'>
            <h2>ACERCA DE MI</h2>
            <div className='textProfileContainer'>
              <img
                className='imgProfile'
                src={profile}
                alt='profile'
                loading='lazy'
              />
              <p className='textProfile'>
              Desarrolladora Web con dos años de experiencia en la creación de aplicaciones web dinámicas y eficientes. Especializada en tecnologías modernas como React, JavaScript, HTML5 y CSS3. Experiencia en gestión de estados con Redux, control de versiones con Git/GitHub y realización de pruebas unitarias con Jest. Competente en el desarrollo de interfaces de usuario responsivas y una sólida comprensión del diseño web utilizando herramientas como Figma y suite Adobe. Además, poseo conocimientos en desarrollo Backend e integración con tecnologías como Node, Express, y bases de datos SQL/NoSQL. Comprometida con la escritura de código claro, mantenible y escalable, y automotivada para aprender nuevas habilidades. Excelente capacidad de autogestión en proyectos tanto independientes como en equipo. Nivel de inglés intermedio y disponibilidad para reubicación.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id='Skills' className='sectionBackgroundSkills'>
        <Container>
          <div className='sectionSkills'>
            <h2>Habilidades</h2>
            <div className='skillsContainer'>
              <div className='hardSkillsContainer'>
                <h3>Tecnologías</h3>
                <ul className='ulHardSkillsContainer'>
                  <li>
                    <span className='hardSkill colorGray'>
                      <FaReact /> React JS
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorWhite'>
                      <IoLogoJavascript /> JavaScript
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorBlue'>
                      <FaHtml5 /> HTML5
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorViolet'>
                      <SiAdobe /> Suit Adobe
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorGreen'>
                      <FaCss3Alt /> CSS3
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorBlue'>
                      <FaWordpressSimple /> Wordpress
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorWhite'>
                      <FaNode /> Node JS
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorViolet'>
                      <FaFigma /> Figma
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorRosse'>
                      <SiRedux /> Redux
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorWhite'>
                      <FaGithub /> Git/GitHub
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorRosse'>
                      <MdOutlinePhonelink />
                      Responssive Web Design
                    </span>
                  </li>

                  <li>
                    <span className='hardSkill colorWhite'>
                      <DiMysql /> MySQL
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorGreen'>
                      <IoLogoFirebase /> Firebase
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorViolet'>
                      <img
                        className='iconSkill'
                        src={boostrapicon}
                        alt='Javascript icon'
                      />{' '}
                      Boostrap
                    </span>
                  </li>
                  <li>
                    <span className='hardSkill colorWhite'>
                      <SiCanva />
                      Canva
                    </span>
                  </li>
                </ul>
              </div>

              <div className='softSkillsContainer'>
                <h3>Habilidades blandas</h3>
                <ul className='softSkills'>
                  <li>Trabajo en equipo</li>
                  <li>Resolución de problemas</li>
                  <li>Autodidacta</li>
                  <li>Habilidades de comunicación</li>
                  <li>Responsabilidad</li>
                  <li>Creatividad</li>
                  <li>Gestión del tiempo</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id='Projects' className='sectionBackgroundProjects'>
        <Container>
          <div className='sectionProjects'>
            <h2 className='projectTitle'>Proyectos</h2>
            <div className='projectContainer'>
              <div className='projectDescription'>
                <h3>Soluciones Digitales Innovadoras y Eficientes</h3>
                <p>
                  <br />
                  He desarrollado una variedad de sitios web que facilitan la
                  comunicación y la interacción con el público de manera
                  eficiente y amigable. <br /> <br /> Mi experiencia incluye la
                  creación de plataformas de servicios, páginas de aterrizaje
                  (landing pages) y sitios web comerciales con ofertas de
                  productos.
                </p>
              </div>
              <CarouselProjects />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
