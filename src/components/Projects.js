import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = (props) => {

  const [projects, setProjects] = useState(props.context.projectData);

  return(
    <div className="projects-wrapper main-content">
      {projects.map((project, i)=> <ProjectCard key={i} project={project} />)}
    </div>
  );
}

export default Projects;