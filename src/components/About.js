import React from 'react';
import ProfileImg from '../img/profile/Profile-pic-1.jpg';

const About = (props) => {
  return(
    <section id="about" className="main-content">
      <div className="bio-wrapper">
        <img src={ProfileImg} alt="Picture of Shaun on white background" />
        <div>
          <h2>Shaun &mdash; Full-Stack Developer</h2>
          <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis 
          aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="skills">
        <div className="skill">
          <div className="skill-name">CSS</div>
          <div className="percent" style={{width: '90%'}}></div>
        </div>
        <div className="skill">
        <div className="skill-name">HTML</div>
          <div className="percent" style={{width: '90%'}}></div>
        </div>
        <div className="skill">
        <div className="skill-name">React.js</div>
          <div className="percent" style={{width: '80%'}}></div>
        </div>
        <div className="skill">
          <div className="skill-name">JavaScript</div>
          <div className="percent" style={{width: '80%'}}></div>
        </div>
        <div className="skill">
          <div className="skill-name">Node.js</div>
          <div className="percent" style={{width: '70%'}}></div>
        </div>
        <div className="skill">
          <div className="skill-name">UX/UI</div>
          <div className="percent" style={{width: '40%'}}></div>
        </div>
      </div>
    </section>
  );
}

export default About;