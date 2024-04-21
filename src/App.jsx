import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [clickedToolBar, setClickedToolBar] = useState(false);

  const toolbar = () => {
    setClickedToolBar(!clickedToolBar);
  }

  const nuclear = () => {
    window.open("https://github.com/AbishurMoses/NuclearPowerSimulator", "_blank")
  }

  return (
    <div>
      <main id="main-cont">
        <nav>
          <div id="title-cont">
            <p className="title">Abishur Moses</p>
          </div>
          <div id="side-nav-cont">
            <div className="link-cont">
              <a href="https://www.linkedin.com/in/abishur-moses/"
                target="_blank" id="link1">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="link-cont">
              <a
                href="https://github.com/AbishurMoses?tab=overview&from=2024-01-01&to=2024-01-06"
                target="_blank" id="link2">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div id="dropdown" onClick={toolbar}> {
              clickedToolBar ? (
                <FontAwesomeIcon icon={faBarsStaggered} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
        </nav>
        <section id="section-container">
          <section id="about-me">
            <div id="wrapper_p">
              <div id="image-me">Image of me goes here</div>
              <p>Hi! I'm Abishur Moses, a Computer Science student eager to leverage technology to create lasting solutions.
                I have been able to cultivate my skills by working with a team of dedicated developers and engineers to create robust software.
                When my laptop and Starbucks are closed, you can find me playing badminton, ping pong or almost any sport that involves a racket.
              </p>
            </div>
          </section>
          <div id="experience-title">
            <p id="pro-title">Projects</p>
          </div>
          <section id="experience">
            <div id="jobs">
              <div id="symvara" >
                <div id="sym-title-con">
                  <p id="sym-title">Symvara, LLC</p>
                  <p id="sym-range">Jul. 2023 - Present</p>
                </div>
                <div id="sym-des-cont">
                  <p id="sym-des">
                    Currently working with a team of software engineers to create a comprehensive college housing management software application.
                    This application will enable clients to manage leave tracking, security checks, and housing structure, among other
                    functionalities tailored to meet the specific needs of college housing management.
                  </p>
                </div>
                <div id="sym-details-cont">
                  <ul id="sym-details">
                    <li> Developing using <b>NestJS</b> with <b>MikroORM</b>, <b>MySQL</b> and a Git/Github workflow. </li>
                    <li> Implemented automatic schema updates using <b>MikroORM</b> for seamless database management. </li>
                    <li> Created 4 automated testing suites with 200+ individual tests using <b>Jest</b>. </li>
                    <li> Wrote documentation outlining automated testing procedures and modified existing database documentation. </li>
                  </ul>
                </div>
                <div id="sym-lan-cont">
                  <p id="sym-lan"><span>Utilized:</span> TypeScript, NestJS, MySQL, Jest, Git, Jira</p>
                </div>
              </div>
              <div id="nuclear-power-plant" >
                <div id="npp-title-con">
                  <p id="npp-title">Nulclear Power Plant</p>
                  <p id="npp-range">Feb. 2022 - Mar. 2022</p>
                </div>
                <div id="npp-des-cont">
                  <p id="npp-des">
                    Colaborated with a partner to create a Nuclear Power Plant Simulator as part of a Advanced Web Project.
                    This project utilizes visual aids to display the health of each individual reactor, enablin the user
                    to make informed decisions. Whether it's managing each reactor individually or using global controls to
                    oversee them simultaneously.
                  </p>
                </div>
                <div id="npp-details-cont">
                  <ul id="npp-details">
                    <li> Developing a backend application using <b>NestJS</b> with <b>MikroORM</b>, <b>MySQL</b> and a Git/Github workflow. </li>
                    <li> Implemented automatic schema updates using <b>MikroORM</b> for seamless database management. </li>
                    <li> Created 4 automated testing suites with 200+ individual tests using <b>Jest</b>. </li>
                    <li> Wrote documentation outlining automated testing procedures and modified existing database documentation. </li>
                  </ul>
                </div>
                <div id="npp-lan-cont">
                  <p id="npp-lan"><span>Utilized:</span> TODO</p>
                </div>
              </div>
              <div id="nuclear-power-plant" >
                <div id="npp-title-con">
                  <p id="npp-title">Nulclear Power Plant</p>
                  <p id="npp-range">Feb. 2022 - Mar. 2022</p>
                </div>
                <div id="npp-des-cont">
                  <p id="npp-des">
                    Colaborated with a partner to create a Nuclear Power Plant Simulator as part of a Advanced Web Project.
                    This project utilizes visual aids to display the health of each individual reactor, enablin the user
                    to make informed decisions. Whether it's managing each reactor individually or using global controls to
                    oversee them simultaneously.
                  </p>
                </div>
                <div id="npp-details-cont">
                  <ul id="npp-details">
                    <li> Developing a backend application using <b>NestJS</b> with <b>MikroORM</b>, <b>MySQL</b> and a Git/Github workflow. </li>
                    <li> Implemented automatic schema updates using <b>MikroORM</b> for seamless database management. </li>
                    <li> Created 4 automated testing suites with 200+ individual tests using <b>Jest</b>. </li>
                    <li> Wrote documentation outlining automated testing procedures and modified existing database documentation. </li>
                  </ul>
                </div>
                <div id="npp-lan-cont">
                  <p id="npp-lan"><span>Utilized:</span> TODO</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main >
    </div >
  )
}

export default App
