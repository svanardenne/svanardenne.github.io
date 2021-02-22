import React from 'react';

const Modal = (props) => {
  return(
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-info">
          <h2>{props.projects.projectTitle}</h2>
          <p>{props.projects.projectText}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;