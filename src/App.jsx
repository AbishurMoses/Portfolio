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
              <p>Hi! I'm Abishur Moses. Ever since I was born at a young age, I always tried to find answers to
                problems and problems to answers. Before long, I realized that it was too much work. So,
                I decided to learn about computers to help me in my endeavor.
                I'm currently a junior, earning my bachelor's in computer science at Southern Adventist University.
                During my sophomore years I dipped my toes in the Software industry by interning at Symvara.
                I've managed to learn to work in a diverse team, follow a workflow and last but not least, solve real-world problems using code.
                If you ever see me playing any racket-based sport or hiking on Saturdays, don't hesitate to start a chat.
              </p>
            </div>
          </section>
          <section id="experience">
          </section>
        </section>
      </main>
    </div>
  )
}

export default App