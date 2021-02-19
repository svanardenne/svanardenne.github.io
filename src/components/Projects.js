import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = (props) => {

  const [projects, setProjects] = useState(props.context.projectData);

  return(
    <React.Fragment>
      <div className="projects-wrapper main-content">
        {projects.map((project, i)=> <ProjectCard key={i} project={project} />)}
      </div>
    </React.Fragment>

  );
}

export default Projects;