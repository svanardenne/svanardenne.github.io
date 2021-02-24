import React from 'react';
import ReactMarkdown from 'react-markdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = (props) => {

  const project = props.projects;

  return(
    <div className="modal-wrapper">
      <div className="modal">
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
            <ReactMarkdown source={project.projectText} />
          </div>
        </div>
        {/* Renders arrow only if not last project in list */}
        {props.modalIndex < 3
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