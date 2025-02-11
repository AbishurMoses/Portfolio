import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import {
  faEye,
  faLightbulb as faLightbulbOn,
} from "@fortawesome/free-regular-svg-icons";
import resume from "./resume/Abishur_Resume.pdf";

function App() {
  const [clickedToolBar, setClickedToolBar] = useState(false);

  const toolbar = () => {
    setClickedToolBar(!clickedToolBar);
  };

  return (
    <div>
      <main id="main-cont">
        <nav>
          <div id="title-cont">
            <p className="title">Abishur Moses</p>
          </div>
          <div id="side-nav-cont">
            <div className="link-cont">
              <a
                href="https://www.linkedin.com/in/abishur-moses/"
                target="_blank"
                id="link1"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="link-cont">
              <a
                href="https://github.com/AbishurMoses?tab=overview&from=2024-01-01&to=2024-01-06"
                target="_blank"
                id="link2"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div id="dropdown" onClick={toolbar}>
              {" "}
              {clickedToolBar ? (
                <FontAwesomeIcon icon={faLightbulbOn} />
              ) : (
                <FontAwesomeIcon icon={faLightbulb} />
              )}
            </div>
          </div>
        </nav>
        <section id="section-container">
          <section id="about-me">
            <div id="wrapper_p">
              <div id="image-me">Profile picture goes here</div>
              <p>
                Hi! I'm Abishur Moses, a Computer Science student eager to
                leverage technology to create lasting solutions. I have been
                able to cultivate my skills by working with a team of dedicated
                developers and engineers to create robust software. When my
                laptop and Starbucks are closed, you can find me playing
                badminton, ping pong or almost any sport that involves a racket.
              </p>
            </div>
          </section>
          <div id="experience-title">
            <p id="pro-title">Projects</p>
          </div>
          <div id="experience">
            <div id="kaizan">
              <div className="title-con">
                <p className="exp-title">Kaizan, LLC</p>
                <p className="range">Jul 2023 - Present</p>
              </div>
              <div className="des-cont">
                <p className="des">
                  Currently working on a creating a full stack application built to 
                  
                  leave tracking, security checks, and housing structure, among
                  other functionalities tailored to meet the specific needs of
                  college housing management.
                </p>
              </div>
              <div className="details-cont">
                <ul className="details">
                  <li>
                    Developed a database using <b>Vertabelo</b>,{" "}
                    <b>MySQL Workbench</b>, and <b>MikroORM</b>
                  </li>
                  <li>
                    Authored a comprehensive Requirement Document, Code Rules,
                    and Policy Guidelines
                  </li>
                  <li>
                    Wrote 13 RESTful API endpoints in a backend system using
                    <b>NestJS</b>
                  </li>
                  <li>
                  Designed a responsive and intuitive UI/UX using <b>Figma</b>
                  </li>
                </ul>
              </div>
              <div className="lan-cont">
                <p className="lan">
                  <span>Utilized:</span> TypeScript, NestJS, React, Vertabelo, MySQL Workbench, Insomnia, Figma, Docker Git,
                  Jira
                </p>
              </div>
            </div>
            {/* --------------------------------------------------------------------- */}
            <div id="symvara">
              <div className="title-con">
                <p className="exp-title">Symvara, LLC</p>
                <p className="range">Jul 2023 - April 2023</p>
              </div>
              <div className="des-cont">
                <p className="des">
                  Worked with a team of software engineers to create
                  a comprehensive college housing management software
                  application. This application was designed to enable clients to manage
                  leave tracking, security checks, and housing structure, among
                  other functionalities tailored to meet the specific needs of
                  college housing management.
                </p>
              </div>
              <div className="details-cont">
                <ul className="details">
                  <li>
                    {" "}
                    Developing using <b>NestJS</b> with <b>MikroORM</b>,{" "}
                    <b>MySQL</b> and a Git/Github workflow.{" "}
                  </li>
                  <li>
                    {" "}
                    Implemented automatic schema updates using <b>
                      MikroORM
                    </b>{" "}
                    for seamless database management.{" "}
                  </li>
                  <li>
                    {" "}
                    Created 4 automated testing suites with 200+ individual
                    tests using <b>Jest</b>.{" "}
                  </li>
                  <li>
                    {" "}
                    Wrote documentation outlining automated testing procedures
                    and modified existing database documentation.{" "}
                  </li>
                </ul>
              </div>
              <div className="lan-cont">
                <p className="lan">
                  <span>Utilized:</span> TypeScript, NestJS, MySQL, Jest, Git,
                  Jira
                </p>
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <div id="nuclear-power-plant">
              <div className="exp-title">
                <p className="title">Nulclear Power Plant</p>
                <p className="range">Feb 2022 - Mar 2022</p>
              </div>
              <div className="des-cont">
                <p className="des">
                  Colaborated with a partner to create a Nuclear Power Plant
                  Simulator as part of a Advanced Web Project. This project
                  utilizes visual aids to display the health of each individual
                  reactor, enablin the user to make informed decisions. Whether
                  it's managing each reactor individually or using global
                  controls to oversee them simultaneously.
                </p>
              </div>
              <div className="details-cont">
                <ul className="details">
                  <li>
                    Used <b>React</b>, <b>JavaScript</b> and <b>yarn</b> to
                    create a front-end application
                  </li>
                  <li>
                    Connecting to Professor's API via native fetch functions
                  </li>
                </ul>
              </div>
              <div className="lan-cont">
                <p className="lan">
                  <span>Utilized: </span>React, JavaScript, HTML, CSS
                </p>
              </div>
            </div>
          </div>
          <div id="connect">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <div className="resume">
                <FontAwesomeIcon icon={faEye} /> View My Resume
              </div>
            </a>
            <a href={resume} download={"Abishur's Resume.pdf"} target="_blank">
              <div className="resume">
                <FontAwesomeIcon icon={faFileDownload} /> Download my Resume
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
