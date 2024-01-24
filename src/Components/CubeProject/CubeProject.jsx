import React from "react";
import "./CubeProject.css";
// Logos
import logoReact from "../../images/logosTechnologies/react.webp";
import logoJs from "../../images/logosTechnologies/js.webp";

const CubeProject = ({ url, img, name, type, description }) => {
  return (
    <div className="projectContainer">
      <a
        className="cubesProjectsTitleImg"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="cubesProjects">
          <img
            className="logoCubeProject"
            src={img}
            alt="Vocabulary game website logo"
          />
          <h2 className="titleCubes">{name}</h2>
          <div className="overlay">
            <p>{description}</p>
            <div className="Technologies">
              <p>Technologies:</p>
              <div className="technologiesCubeContainer">
                <img
                  className="technologyLogo"
                  src={logoReact}
                  alt="Technologie"
                />
                <img
                  className="technologyLogo"
                  src={logoJs}
                  alt="Technologie"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
      <p className="textProject">{type}</p>
    </div>
  );
};

export default CubeProject;
