import React, { useEffect } from 'react';
import ProfileImg from '../img/profile/Profile-pic-1.jpg';

const About = (props) => {

  // Calls fade function from context
  useEffect(() => {
    props.context.fade();
  });

  return(
    <section id="about" className="main-content fades" style={{position: 'relative'}}>
      <div className="about">
        <div className="bio-wrapper">
          <img src={ProfileImg} alt="Picture of Shaun on white background" />
          <div>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="skills">
          <div className="skill">
            <div className="skill-title">CSS</div>
            <div className="skill-percent">
              <div className="skill-percent-fill" style={{width: '90%'}}></div>
            </div>
            <span>90%</span>
          </div>
          <div className="skill">
            <div className="skill-title">HTML</div>
            <div className="skill-percent">
              <div className="skill-percent-fill" style={{width: '90%'}}></div>
            </div>
            <span>90%</span>
          </div>
          <div className="skill">
            <div className="skill-title">JavaScript</div>
            <div className="skill-percent">
              <div className="skill-percent-fill" style={{width: '80%'}}></div>
            </div>
            <span>80%</span>
          </div>
          <div className="skill">
            <div className="skill-title">React</div>
            <div className="skill-percent">
              <div className="skill-percent-fill" style={{width: '80%'}}></div>
            </div>
            <span>80%</span>
          </div>
          <div className="skill">
            <div className="skill-title">Node</div>
            <div className="skill-percent">
              <div className="skill-percent-fill" style={{width: '70%'}}></div>
            </div>
            <span>70%</span>
          </div>
          <div className="skill">
            <div className="skill-title">UX/UI</div>
            <div className="skill-percent">
              <div className="skill-percent-fill" style={{width: '40%'}}></div>
            </div>
            <span>40%</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default About;