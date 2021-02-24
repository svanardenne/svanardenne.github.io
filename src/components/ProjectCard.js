import React from 'react';
import ReactMarkdown from 'react-markdown';

const ProjectCard = (props) => {

  const project = props.project;

  return(
    <div className="card-wrapper">
      <img 
        src={require(`../img/projects/${project.projectImage}`).default} 
        alt={project.projectTitle}
      />
      <div className="project-info">
        <h3 className="project-title">{project.projectTitle}</h3>
        <div onClick={() => props.handleModal(project.id)} className="button">More info</div>
      </div>
    </div>
  );

}

export default ProjectCard;