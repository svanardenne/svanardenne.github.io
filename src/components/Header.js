import React from 'react';

// Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return(
    <header id="home" className="main-header fades">
      <div className="banner">
        <div className="banner-text">
          <h1>Hi, I'm <span>Shaun van Ardenne</span></h1>
          <h1>I'm a full-stack web developer</h1>
        </div>
          <a className="button" href="#details">See my work<FontAwesomeIcon className="banner-icon" icon={['fas', 'arrow-down']} /></a>
      </div>
    </header>
  );
}

export default Header;