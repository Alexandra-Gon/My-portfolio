import { useEffect } from 'react';
// Components
import Container from '../../Components/Container/Container';
// Images Suculentas
import projectPrototipe from '../../images/projectsImages/projectPrototipe.png';
import projectPrototipe2 from '../../images/projectsImages/projectPrototipe2.png';
import projectPrototipe3 from '../../images/projectsImages/projectPrototipe3.png';
// Images Walgon
import projectRediseño from '../../images/projectsImages/pojectReiseño.png';
import projectRediseño2 from '../../images/projectsImages/pojectReiseño2.png';
import projectRediseño3 from '../../images/projectsImages/pojectReiseño3.png';
// Images Coach Training
import projectDiseñoDesarrollo from '../../images/projectsImages/projectDiseñoDesarrollo.png';
import projectDiseñoDesarrollo2 from '../../images/projectsImages/projectDiseñoDesarrollo2.png';
import projectDiseñoDesarrollo3 from '../../images/projectsImages/projectDiseñoDesarrollo3.png';
// Styles
import './ProjectsPage.css';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='projects' id='projects'>
      <Container className='projectsContainer'>
        <h1>Proyectos</h1>
        <section>
          <div className='card'>
            <div className='cardProject'>
              <div className='cardProjectText'>
                <h2>Santa María Suculentas</h2>
                <p>Prototipo desarrollado utilizando Adobe XD</p>
                <div className='tags'>
                  <div>Adobe</div>
                  <div>Prototipo</div>
                  <div>Wireframe</div>
                  <div>userFlow</div>
                  <div>Diseño UI</div>
                  <div>Diseño UX</div>
                  <div>Boceto</div>
                </div>
              </div>
              <img
                src={projectPrototipe}
                alt='Vista previa de prototipado de proyecto sobre una tienda de plantas suculentas'
              />
            </div>
            <details className='dropdowns'>
              <summary>Ver más</summary>
              <div className='dropdownsInfo'>
                <div>
                  <p>
                    <b>Santa María Suculentas</b> es un proyecto de prototipado
                    para una tienda en línea especializada en plantas
                    suculentas. Este proyecto abarca el diseño para plataformas
                    web y móviles, considerando diferentes vistas para la
                    tienda, detalles del producto, carrito de compras y blog. El
                    enfoque está en crear una estética suave y delicada,
                    utilizando una paleta de colores que refleje la esencia del
                    producto, con el objetivo de transmitir sensaciones de
                    pureza, paz y armonía. La combinación de estética,
                    funcionalidad y singularidad garantiza una experiencia de
                    usuario óptima.
                  </p>
                  <br />
                  <p>
                    El proceso de diseño comienza con bocetos a lápiz en papel,
                    seguido de un diseño digital en escala de grises, para
                    culminar en un prototipo completo que incluye un flujo de
                    trabajo y su correspondiente user flow.
                  </p>
                  <br />
                  <div className='prototipesLinks'>
                    <a
                      href='https://xd.adobe.com/view/b45fe473-7fab-4daa-a4fb-ab2d5db3a599-e10c/flow/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Prototipo Desktop
                    </a>
                    <a
                      href='https://xd.adobe.com/view/48b2bea9-d6e5-48c1-adcf-21605e7f2d8e-1de1/flow/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Prototipo Mobile
                    </a>
                  </div>
                </div>
                <div className='dropdownsInfoImages'>
                  <img
                    src={projectPrototipe2}
                    alt='Guia de diseño para el proyecto de tienda de plantas suculentas'
                  />
                  <img
                    src={projectPrototipe3}
                    alt='Guia de diseño para el proyecto de tienda de plantas suculentas'
                  />
                </div>
              </div>
            </details>
          </div>
          <div className='card'>
            <div className='cardProject'>
              <div className='cardProjectText'>
                <h2>Walgon Soft</h2>
                <p>Prototipo desarrollado utilizando Figma</p>
                <div className='tags'>
                  <div>React</div>
                  <div>Javascript</div>
                  <div>Figma</div>
                  <div>Diseño Web</div>
                  <div>Desarrollo</div>
                  <div>NodeJS</div>
                  <div>Diseño UX</div>
                  <div>Diseño UI</div>
                </div>
              </div>
              <img
                src={projectDiseñoDesarrollo}
                alt='Vista previa de proyecto de página de servicios de desarrollo web'
              />
            </div>
            <details className='dropdowns'>
              <summary>Ver más</summary>
              <div className='dropdownsInfo'>
                <div>
                  <p>
                    <b>Walgon Soft</b> es una plataforma de servicios
                    especializada en la creación de páginas web, ya sea mediante
                    desarrollo en código puro con tecnologías modernas o
                    utilizando sistemas de gestión de contenido (CMS) como
                    WordPress. La identidad de Walgon Soft se fundamenta en la
                    fuerza, modernidad y eficacia de sus productos, asegurando
                    adaptabilidad y usabilidad. Además, ofrece un acceso fácil a
                    la asesoría y compra a través de un formulario que permite a
                    los clientes seleccionar directamente el servicio que
                    necesitan.
                  </p>
                  <br />
                  <p>
                    Para el desarrollo de esta plataforma, se diseñaron
                    logotipos adaptativos que se ajustan a diferentes posiciones
                    y colores base, ya que la compañía planea expandir su oferta
                    con una gama de productos de merchandising para fines
                    publicitarios.
                  </p>
                </div>
                <div className='dropdownsInfoImages'>
                  <img
                    src={projectDiseñoDesarrollo2}
                    alt='Guia de diseño para el proyecto de tienda de plantas suculentas'
                  />
                  <img
                    src={projectDiseñoDesarrollo3}
                    alt='Guia de diseño para el proyecto de tienda de plantas suculentas'
                  />
                </div>
              </div>
            </details>
          </div>
          <div className='card'>
            <div className='cardProject'>
              <div className='cardProjectText'>
                <h2>Coach Training</h2>
                <p>Prototipo desarrollado utilizando Figma</p>
                <div className='tags'>
                  <div>Figma</div>
                  <div>Prototipo</div>
                  <div>Wireframe</div>
                  <div>userFlow</div>
                  <div>Diseño UI</div>
                  <div>Diseño UX</div>
                  <div>Boceto</div>
                </div>
              </div>
              <img
                src={projectRediseño}
                alt='Vista previa de proyecto de rediseño de interfaz'
              />
            </div>
            <details className='dropdowns'>
              <summary>Ver más</summary>
              <div className='dropdownsInfo'>
                <div>
                  <p>
                    El Proyecto <b>Coach Training</b> es un rediseño del
                    prototipo que se centra en mejorar tanto la funcionalidad
                    como la estética del sitio web. Se busca potenciar el
                    alcance y la motivación personal a través de una paleta de
                    colores más definida y la combinación de dos tipografías,
                    que resaltan la importancia de los mensajes. Además, se
                    optimiza el diseño de las imágenes mediante el uso de
                    máscaras y efectos que permiten una mejor integración con el
                    fondo y refuerzan la intención del sitio.
                  </p>
                  <br />
                  <p>
                    Se incorpora una nueva sección de experiencias, donde el
                    coach training podrá adjuntar videos profesionales desde
                    YouTube, mostrando la efectividad de su entrenamiento y
                    compartiendo testimonios destacados.
                  </p>
                  <br />
                  <p>
                    Asimismo, el sitio web contará con un acceso directo para la
                    compra de productos, permitiendo al vendedor gestionar su
                    mercancía mediante dropshipping y elegir proveedores según
                    su conveniencia en términos de precios.
                  </p>
                </div>
                <div className='dropdownsInfoImages'>
                  <img
                    src={projectRediseño2}
                    alt='Guia de diseño para el proyecto de tienda de plantas suculentas'
                  />
                  <img
                    src={projectRediseño3}
                    alt='Guia de diseño para el proyecto de tienda de plantas suculentas'
                  />
                </div>
              </div>
            </details>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default ProjectsPage;
