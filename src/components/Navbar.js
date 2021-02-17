import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink className="nav-link" to="/home">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/projects">Projects</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </div>
      <FontAwesomeIcon icon={["fas", "bars"]} className="nav-toggle" onClick={navToggle} />
    </nav>
  );
}

export default Navbar;