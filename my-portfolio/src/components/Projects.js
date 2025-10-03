import React from 'react';

// You'll want to replace these with your actual project images
import projectImage1 from '../assets/task_manager.png';
import projectImage2 from '../assets/sorting_visualizer.png';
import projectImage3 from '../assets/doctools.png'; // Added image for DocTools

function Projects() {
  const projectData = [
    {
      title: 'Task Manager App',
      description: 'A full-stack task management application using MongoDB, Express.js, React, and Node.js (MERN) with RESTful APIs for all CRUD operations.',
      liveLink: 'https://full-stack-task-manager-app-omega.vercel.app/', // TODO: Add live site URL
      codeLink: 'https://github.com/tyronemt/full-stack-task-manager-app', // TODO: Add code repository URL
      image: projectImage1,
    },
    {
      title: 'Sorting Visualizer',
      description: 'An interactive web app built with React and JavaScript to demonstrate nine distinct sorting algorithms, featuring auditory feedback via the Web Audio API.',
      liveLink: 'https://sorting-visualizer-psi-seven.vercel.app/', // TODO: Add live site URL
      codeLink: 'https://github.com/tyronemt/sorting-visualizer', // TODO: Add code repository URL
      image: projectImage2,
    },
    {
      title: 'DocTools',
      description: 'A Python/Flask application hosted on AWS EC2, designed to increase workplace efficiency and productivity within a medical office.',
      liveLink: 'https://www.youtube.com/watch?v=rmzzODVMQFc', // TODO: Add live site URL
      codeLink: 'https://github.com/tyronemt/doctools', // TODO: Add code repository URL
      image: projectImage3,
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects.</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} screenshot`} />
            </div>
            <div className="project-text">
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