import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = (props) => {
  return(
    <div className="modal-wrapper">
      <div className="modal">
        <div onClick={() => props.handleClose()} className="modal-close">
          <FontAwesomeIcon className="modal-close-icon" icon={['fas', 'window-close']} />
        </div>
        <div onClick={() => props.handlePrevious()} className="modal-left-arrow">
          <FontAwesomeIcon className="arrow-icon" icon={['fas', "arrow-left"]} />
        </div>
        <div className="modal-details">
          <h2>{props.projects.projectTitle}</h2>
          <p>{props.projects.projectText}</p>
        </div>
        <div onClick={() => props.handleNext()} className="modal-right-arrow">
          <FontAwesomeIcon className="arrow-icon" icon={['fas', "arrow-right"]} />
        </div>
      </div>
    </div>
  );
}

export default Modal;