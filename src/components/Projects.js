import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const Projects = (props) => {

  // Sets state for this component
  const [projects, setProjects] = useState(props.context.projectData);
  const [ modalState, setModalState ] = useState(false);
  const [ modalIndex, setModalIndex ] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(Math.round(projects.length / 6));

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

  // Handles the filtering of projects
  const handleFilter = (e) => {
    const navList = document.querySelectorAll('.project-filter-item');
    const target = e.target;
    navList.forEach(listItem => listItem.classList.remove('project-filter-active'));
    target.classList.add('project-filter-active');
    const value = e.target.textContent;
    if (value === 'All') {
      setProjects(props.context.projectData);
      setPages(Math.ceil(props.context.projectData.length / 6));
    } else {
      const newArr = props.context.projectData.filter(project => project.projectTech.includes(value));
      setProjects(newArr);
      setPages(Math.ceil(newArr.length / 6));
    }
  }

  // Handles Pagination next page
  function goToNextPage() {
    if (currentPage < pages) {
      setCurrentPage((page) => page + 1);
    }
  }

  // Handles Pagination previous page
  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  }

  // Handles page change
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  // Sets up the pagination array to display buttons in JSX
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pages) * pages;
    return new Array(pages).fill().map((_, idx) => start + idx + 1);
  };

  // Returns an updated project array based on current page
  const getPaginatedData = (data) => {
    const startIndex = currentPage * 6 - 6;
    const endIndex = startIndex + 6;
    return data.slice(startIndex, endIndex);
  };

  return(
    <section id="projects" className="main-content">

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

      {/* Filter for projects */}
      <ul className="project-filter-nav">
        <li onClick={(e) => handleFilter(e)} className="project-filter-item project-filter-active">All</li>
        <li onClick={(e) => handleFilter(e)} className="project-filter-item">JavaScript</li>
        <li onClick={(e) => handleFilter(e)} className="project-filter-item">React</li>
        <li onClick={(e) => handleFilter(e)} className="project-filter-item">Node</li>
      </ul>

      {/* Display Projects */}
      <div className="projects-wrapper main-content">
        {getPaginatedData(projects).map((project, i)=> <ProjectCard key={i} projects={projects} project={project} handleModal={handleModal} />)}
      </div>

      {/* Display Pagination */}
      <div className="pagination">

        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, i) => (
          <button
            key={i}
            onClick={changePage}
            className={`pagination-item ${currentPage === item ? 'page-active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>

    </section>

  );
}

export default Projects;