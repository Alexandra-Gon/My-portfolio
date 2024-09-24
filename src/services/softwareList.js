import iconoXd from '../images/software/xd.png';
import iconoFigma from '../images/software/figma.png';
import iconoIlustration from '../images/software/ilustration.png';
import iconoPhotoshop from '../images/software/photoshop.png';
import iconoIndesign from '../images/software/indesign.png';
import iconoSketch from '../images/software/sketch1.png';
import iconoHtml5 from '../images/software/html5.png';
import iconoCss from '../images/software/css-3.png';
import iconoReact from '../images/software/react.png';
import iconoJs from '../images/software/js.png';
import iconoWordpress from '../images/software/wordpress.png';
import iconoTrello from '../images/software/trello.png';
import iconoElementor from '../images/software/elementor.png';
import iconoGithub from '../images/software/github.png';

const softwareList = () => {
  const softwareDates = [
    { image: iconoXd, title: 'Adobe XD', text: 'Bocetos y prototipos UX/UI' },
    { image: iconoFigma, title: 'Figma', text: 'Bocetos y prototipos UX/UI' },
    {
      image: iconoIlustration,
      title: 'Ilustrator',
      text: 'Diseño y creación de vectores',
    },
    {
      image: iconoPhotoshop,
      title: 'Photoshop',
      text: 'Creación y retoque de material gráfico',
    },
    { image: iconoIndesign, title: 'Indesign', text: 'Diseño editorial' },
    { image: iconoSketch, title: 'Sketch', text: 'Bocetos y prototipos UX/UI' },
    {
      image: iconoHtml5,
      title: 'HTML5',
      text: 'Estructura de páginas web UI',
    },
    { image: iconoCss, title: 'CSS3', text: 'Aplicación de estilos en UI' },
    { image: iconoReact, title: 'React Js', text: 'Estructura eficiente de UI' },
    { image: iconoJs, title: 'Javascript', text: 'Interacción UX/UI' },
    {
      image: iconoWordpress,
      title: 'Wordpress',
      text: 'Estructura y creación de páginas web completas',
    },
    { image: iconoTrello, title: 'Trello', text: 'Organización y planeación' },
    {
      image: iconoElementor,
      title: 'Elementor',
      text: 'Estructura y creación de páginas web completas',
    },
    {
      image: iconoGithub,
      title: 'GitHub',
      text: 'Alojador y control de versiones de código',
    }
  ];

  return softwareDates;

};

export default softwareList;
