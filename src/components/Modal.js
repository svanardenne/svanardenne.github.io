import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = (props) => {
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
        <div className="modal-details">
          <h2>{props.projects.projectTitle}</h2>
          <p>{props.projects.projectText}</p>
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

      </div>
    </div>
  );
}

export default Modal;