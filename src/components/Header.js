import React from 'react';

const Header = () => {
  return(
    <header id="home" className="main-header">
      <div className="banner">
        <div className="banner-text">
          <h1>Hi, I'm <span>Shaun van Ardenne</span></h1>
          <h1>I'm a full-stack Developer</h1>
        </div>
          <a className="button" href="#details">Check it out!</a>
      </div>
    </header>
  );
}

export default Header;