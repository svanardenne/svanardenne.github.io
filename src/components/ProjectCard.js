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
      <div>
        <h3>{project.projectTitle}</h3>
        <ReactMarkdown source={project.projectText} />
      </div>
    </div>
  );

}

export default ProjectCard;