import React from 'react';
import projectImage1 from '../assets/task_manager.png';
import projectImage2 from '../assets/sorting_visualizer.png';
import projectImage3 from '../assets/doctools.png';

function Projects() {
  const projectData = [
    {
      title: 'Task Manager App',
      description: 'A full-stack task management application using the MERN stack with RESTful APIs for all CRUD operations.',
      liveLink: 'https://full-stack-task-manager-app-omega.vercel.app/',
      codeLink: 'https://github.com/tyronemt/full-stack-task-manager-app',
      image: projectImage1,
    },
    {
      title: 'Sorting Visualizer',
      description: 'An interactive web app built with React to demonstrate nine distinct sorting algorithms, featuring auditory feedback.',
      liveLink: 'https://sorting-visualizer-psi-seven.vercel.app/',
      codeLink: 'https://github.com/tyronemt/sorting-visualizer',
      image: projectImage2,
    },
    {
      title: 'DocTools',
      description: 'A Python/Flask application hosted on AWS EC2, designed to increase efficiency and productivity in a medical office.',
      liveLink: 'https://www.youtube.com/watch?v=rmzzODVMQFc',
      codeLink: 'https://github.com/tyronemt/doctools',
      image: projectImage3,
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects.</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={`${project.title} screenshot`} />
            </a>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">LIVE SITE</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">VIEW CODE</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;