import React from 'react';

// Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = (props) => {

  const project = props.project;
  const projects = props.projects;

  return(
    <div className="modal-wrapper">
      <div className="modal noselect">
        {/* Window Close Button */}
        <div onClick={() => props.handleClose()} className="modal-close">
          <FontAwesomeIcon className="modal-close-icon" icon={['fas', 'window-close']} />
        </div>

        {/* Renders arrow only if not first project in list */}
        {props.modalIndex > 1
        ?
        <div onClick={() => props.handlePrevious()} className="modal-left-arrow">
          <FontAwesomeIcon className="arrow-icon" icon={['fas', "arrow-left"]} />
        </div>
        :
        null
        }

        <div>
          <h2>{project.projectTitle}</h2>
          <div className="modal-details">
            <p>{project.projectText}</p>
            <h3>Technology Used</h3>
            <ul className="modal-tech">
              {project.projectTech.map((project, i) => <li key={i}>{project}</li>)}
            </ul>
          </div>
          <img className="modal-img" src={require(`../img/projects/${project.projectImage}`).default} />
        </div>

        {/* Renders arrow only if not last project in list */}
        {props.modalIndex < projects.length
        ?
        <div onClick={() => props.handleNext()} className="modal-right-arrow">
          <FontAwesomeIcon className="arrow-icon" icon={['fas', "arrow-right"]} />
        </div>
        :
        null
        }

        <div className="modal-buttons">
          <a className="button" target="_blank" href={project.projectLink}>Live Demo</a>
          <a className="button" target="_blank" href={project.githubLink}>Github</a>
        </div>
      </div>
    </div>
  );
}

export default Modal;