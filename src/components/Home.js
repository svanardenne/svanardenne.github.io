import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Component Imports
import Header from './Header';
import Details from './Details';
import Modal from './Modal';
import CarouselCard from './CarouselCard';

// Imports React Responsive Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Home = (props) => {

  // Sets state for this component
  const [projects, setProjects] = useState(props.context.projectData.slice(0, 3));
  const [ modalState, setModalState ] = useState(false);
  const [ modalIndex, setModalIndex ] = useState([]);

  // Sets data for the modal window and creates the popup
  const handleModal = (data) => {
    setModalIndex(data);
    if (modalState === false) {
      setModalState(true);
    } else if (modalState === true) {
      setModalState(false);
    }
  }

  // Handler for moving to next project in modal window on click
  const handleNext = () => {
    if (modalIndex < projects.length) {
      setModalIndex(modalIndex + 1);
    }
  }

  // Handler for moving to previous project in modal window on click
  const handlePrevious = () => {
    if (modalIndex > 1) {
      setModalIndex(modalIndex - 1);
    }
  }

  // Handles the closing of the modal window
  const handleClose = () => {
    if (modalState === true) {
      setModalState(false);
    }
  }

  return(
    <React.Fragment>
      {/* Creates modal window based on state */}
      {modalState
      ?
      <Modal
        handleClose={handleClose}
        handleNext={handleNext} 
        handlePrevious={handlePrevious} 
        projects={projects[modalIndex -1]} 
        modalIndex={modalIndex}
      />
      :
      null}
      <Header />
      <Details />
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