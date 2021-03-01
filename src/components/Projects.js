import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const Projects = (props) => {

  // Sets state for this component
  const [projects, setProjects] = useState(props.context.projectData);
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
      <h2 className="projects-title">Projects</h2>
      {modalState
      ?
      <Modal
        handleClose={handleClose}
        handleNext={handleNext} 
        handlePrevious={handlePrevious}
        projects={projects}
        project={projects[modalIndex -1]} 
        modalIndex={modalIndex}
      />
      :
      null}
      <div className="projects-wrapper main-content">
        {projects.map((project, i)=> <ProjectCard key={i} projects={projects} project={project} handleModal={handleModal} />)}
      </div>
    </React.Fragment>

  );
}

export default Projects;