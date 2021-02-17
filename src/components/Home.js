import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <section id="home">
      <div className="banner">
        <div className="banner-text">
          <h1>Hi, I'm Shaun</h1>
          <h1>I'm a full-stack Developer</h1>
        </div>
        <div className="banner-buttons">
          <Link className="button" to="/about">About Me</Link>
          <Link className="button" to="/projects">See My Work</Link>
        </div>

      </div>
    </section>
  );
}

export default Home;