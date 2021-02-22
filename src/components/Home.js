import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';
import CarouselCard from './CarouselCard';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = (props) => {

  const [projects, setProjects] = useState(props.context.projectData.slice(0, 3));
  const [ modalState, setModalState ] = useState(false);
  const [ modalIndex, setModalIndex ] = useState([]);

  // Sets data for the modal window and creates the popup
  const handleModal = (data) => {
    setModalIndex(data);
    if (modalState === false) {
      setModalState({modalState: true});
    } else if (modalState === true) {
      setModalState({modalState: false});
    }
  }

  return(
    <React.Fragment>
      {modalState
      ?
      <Modal projects={projects[modalIndex]} />
      :
      null}
      <section id="home" className="main-content">
        <div className="banner">
          <div className="banner-text">
            <h1>Hi, I'm Shaun van Ardenne</h1>
            <h1>I'm a full-stack Developer</h1>
          </div>
            <a className="button" href="#details">Check it out!</a>
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
      <section id="carousel">
        <h1 className="carousel-title">Projects</h1>
        <Carousel showThumbs={false} className="carousel">
          {projects.map((project, i) => <CarouselCard handleModal={handleModal} className="carousel-slide" key={i} project={project} />)}
        </Carousel>
        <Link className="button" to="/projects">More Projects</Link>
      </section>
    </React.Fragment>
  );
}

export default Home;