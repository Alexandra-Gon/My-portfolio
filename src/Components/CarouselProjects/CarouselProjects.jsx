import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselProjects.css';

// Services
import projectsList from '../../services/projectsList';
// Component
import CardProject from '../CardProject/CardProject';

const CarouselProjects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
  };

  return (
    <div className='carouselProjects'>
      <Slider {...settings}>
        {projectsList().map((element, i) => {
          return (
            <CardProject image={element.image} link={element.link} key={i} />
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselProjects;
