import React from 'react';

const ProjectCard = (props) => {

  const project = props.project;

  return(
    <div className="card-wrapper">
      <img 
        src={require(`../img/projects/${project.projectImage}`).default} 
        alt={project.projectTitle}
      />
      <div>
        <h3>{project.projectTitle}</h3>
        <p>
          {project.projectText}
        </p>
      </div>
    </div>
  );

}

export default ProjectCard;