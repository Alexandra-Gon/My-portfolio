import "./HomePage.css";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";

const HomePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e) => {
    console.log(name, email, message);
    alert("Your data has been sent successfully!");
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <nav className="nav">
        <ul className="navBar">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Profile">Profile</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <section id="Home" className="headerPresentation">
          <img
            className="imgPresentation"
            src={require("../../images/photo1.webp")}
            alt="Presentation photo"
          />
          <h1 className="headerName">Alexandra Gonzalez</h1>
          <h2 className="headerProfession">
            I'm a <b>Front-End Developer</b> and <b>Visual Artist</b>
          </h2>
        </section>
      </header>
      <section id="Profile" className="sectionBackgroundProfile">
        <div className="profileContainer">
          <img
            className="imgProfile"
            src={require("../../images/photo2.webp")}
            alt="profile photo"
          />
          <div>
            <h2>About me...</h2>
            <div className="textProfileContainer">
              <p className="textProfile">
                Web developer and Visual Arts professional focused on creating
                responsive user interfaces using Frontend technologies such as
                ReactJs, JavaScript, HTML5, CSS3, Git/GitHub versioning control
                systems, and others. Focused on developing clear and
                maintainable code, self-motivated to learn new skills and open
                to constant professional development.
              </p>
            </div>
            <button className="buttonProfile">
              <a
                href="https://drive.google.com/file/d/1S9-sfjLtoOh7StAJoCVNS1TE3IEmkgaL/view"
                target="_blank"
                rel="noreferrer noopener"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </section>
      <section id="Skills" className="sectionBackgroundSkills">
        <div className="sectionSkills">
          <h2>Skills</h2>
          <div className="skillsContainer">
            <div className="hardSkillsContainer">
              <h3 className="skillsTitle">Hard</h3>
              <ul className="ulHardSkillsContainer">
                <li>
                  <span className="hardSkill colorGray">
                    <img
                      className="iconSkill"
                      src={require("../../images/react-icon.svg.webp")}
                      alt=" React Icon"
                    />
                    React JS
                  </span>
                </li>
                <li>
                  <span className="hardSkill colorWhite">
                    <img
                      className="iconSkill"
                      src={require("../../images/jsIcon.webp")}
                      alt=" React Icon"
                    />
                    JavaScript
                  </span>
                </li>
                <li>
                  <span className="hardSkill colorBlue">HTML5</span>
                </li>
                <li>
                  <span className="hardSkill colorGreen">CSS3</span>
                </li>
                <li>
                  <span className="hardSkill colorViolet">Figma</span>
                </li>
                <li>
                  <span className="hardSkill colorRosse">Redux</span>
                </li>
                <li>
                  <span className="hardSkill colorWhite">Git/GitHub</span>
                </li>
                <li>
                  <span className="hardSkill colorRosse">API-Rest</span>
                </li>
                <li>
                  <span className="hardSkill colorRosse">
                    Responssive Web Design
                  </span>
                </li>
                <li>
                  <span className="hardSkill colorGreen">Firebase</span>
                </li>
                <li>
                  <span className="hardSkill colorViolet">Boostrap</span>
                </li>
                <li>
                  <span className="hardSkill colorBlue">Wordpress</span>
                </li>
                <li>
                  <span className="hardSkill colorWhite">Canva</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="skillsTitle">Soft</h3>
              <ul className="softSkills">
                <li>Teamwork</li>
                <li>Problem-solving</li>
                <li>Self-taught</li>
                <li>Communication skills</li>
                <li>Accountability</li>
                <li>Creativity</li>
                <li>Time management</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="Projects" className="sectionBackgroundProjects">
        <div className="sectionProjects">
          <h2 className="projectTitle">Projects</h2>
          <div className="allCubesProjects">
            <div className="projectContainer">
              <a
                className="cubesProjectsTitleImg"
                href=" https://artenet.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="cubesProjects">
                  <img
                    className="logoCubeProject"
                    src={require("../../images/logoArtenet.webp")}
                    alt="Artenet cube"
                  />
                  <h2 className="titleCubes">Artenet</h2>
                </div>
              </a>

              <p className="textProject">E-commerce</p>
            </div>
            <div className="projectContainer">
              <a
                className="cubesProjectsTitleImg"
                href="https://auroradrinks.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="cubesProjects">
                  <img
                    className="logoCubeProject"
                    src={require("../../images/logoAuroraDrinks.webp")}
                    alt="Aurora Drinks cube"
                  />
                  <h2 className="titleCubes">Aurora Drinks</h2>
                </div>
              </a>

              <p className="textProject">Website</p>
            </div>
            <div className="projectContainer">
              <a
                className="cubesProjectsTitleImg"
                href="http://nagovisualartist.wordpress.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="cubesProjects">
                  <img
                    className="logoCubeProject"
                    src={require("../../images/logoBlog.webp")}
                    alt="Movies cube"
                  />
                  <h2 className="titleCubes">Art Blog</h2>
                </div>
              </a>

              <p className="textProject">Blog</p>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact" className="backgroundContact">
        <h2>Contact</h2>
        <p>Get in touch</p>
        <form
          className="formContact"
          action="send"
          method="post"
          onSubmit={formSubmit}
        >
          <label>
            <input
              className="inputForm"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              className="inputForm"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <textarea
              className="inputForm"
              placeholder="Your Message..."
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button className="buttonContact" type="submit">
            SUBMIT
          </button>
        </form>

        <div className="iconContactContainer">
          <a
            className="iconContact"
            href="https://github.com/Alexandra-Gon"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon />{" "}
          </a>
          <a
            className="iconContact"
            href="https://www.linkedin.com/in/alexandragon/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon />
          </a>
        </div>
        <p className="textCopyrights">ALEXANDRA GONZALEZ ©2023</p>
      </section>
      <div className="backToTop">
        <a href="#Home">
          <KeyboardDoubleArrowUpIcon />
        </a>
      </div>
    </>
  );
};

export default HomePage;
