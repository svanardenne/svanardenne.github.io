import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = (props) => {
  return(
    <div className="projects-wrapper">
      {props.context.projectData.map((project, i)=> <ProjectCard key={i} project={project} />)}
    </div>
  );
}

export default Projects;