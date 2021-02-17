import React from 'react';

// Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Navbar = (props) => {

  // Logic for toggling the nav links on click
  const navToggle = () => {
    const linkWrapper = document.querySelector('.link-wrapper');
    linkWrapper.classList.toggle('visible');
  }

  return(
    <nav>
      <div className="link-wrapper">
        <a className="nav-link" href="#home">Home</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>
      <FontAwesomeIcon icon={["fas", "bars"]} color="black" className="nav-toggle" onClick={navToggle} />
    </nav>
  );
}

export default Navbar;