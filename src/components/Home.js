import React from 'react';
import { Link } from 'react-router-dom';

// Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return(
    <React.Fragment>
      <section id="home" className="main-content">
        <div className="banner">
          <div className="banner-text">
            <h1>Hi, I'm Shaun van Ardenne</h1>
            <h1>I'm a full-stack Developer</h1>
          </div>
          <div className="banner-buttons">
            <Link className="button" to="/about">About Me</Link>
            <Link className="button" to="/projects">See My Work</Link>
          </div>
        </div>
      </section>
      <section id="details">
        <div className="details-wrapper">
          <div className="detail">
            <div className="icon">
              <FontAwesomeIcon className="detail-icon" icon={['fas', "code"]} />
            </div>
            <h3>Clean</h3>
            <p>Legible code with good structure and comments.</p>
          </div>
          <div className="detail">
            <div className="icon">
              <FontAwesomeIcon className="detail-icon" icon={['fas', "mobile-alt"]} />
            </div>
            <h3>Responsive</h3>
            <p>My focus is on layouts that present well on any device.</p>
          </div>
          <div className="detail">
            <div className="icon">
              <FontAwesomeIcon className="detail-icon" icon={['fas', "sitemap"]} />
            </div>
            <h3>Intuitive</h3>
            <p>Dedicated to creating easy to use, effective UI/UX.</p>
          </div>
          <div className="detail">
            <div className="icon">
              <FontAwesomeIcon className="detail-icon" icon={['fas', "layer-group"]} />
            </div>
            <h3>Full-Stack</h3>
            <p>Focused on React, Node, Express, and SQL</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;