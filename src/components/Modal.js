import React from 'react';

const Modal = (props) => {
  return(
    <div className="modal">
      <h2>{props.projects[0].projectTitle}</h2>
    </div>
  );
}

export default Modal;