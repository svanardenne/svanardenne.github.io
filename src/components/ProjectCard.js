import React from 'react';

const ProjectCard = (props) => {

  return(
  <div className="card-wrapper">
    <img 
      src={require(`../img/projects/${props.project.projectImage}`).default} 
      alt={props.project.projectTitle}
    />
    <div>
      <h3>{props.project.projectTitle}</h3>
      <p>
        {props.project.projectText}
      </p>
    </div>
  </div>
  );

}

export default ProjectCard;