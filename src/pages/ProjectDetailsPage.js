// src/pages/ProjectDetailsPage.js

import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import projectsData from './../projects-data.json';

function ProjectDetailsPage(props) {
    const [foundProject, setFoundProject] = useState(null);

//   const foundProject = projectsData.find((projectObj) => {
//     return projectObj._id === props.match.params.projectId;
//   });
  
//   console.log(props);

    useEffect(() => {
        const project = projectsData.find((projectObj) => {
            return projectObj._id === props.match.params.projectId;
        })

        if (project) setFoundProject(project);
        
    }, [props.match.params.projectId]);
  
  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject && <h3>Project not found!</h3>}

      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
          <Link to="/projects">Back</Link>
        </>
      )}
    </div>
  )
}

export default ProjectDetailsPage;