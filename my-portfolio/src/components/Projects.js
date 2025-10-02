import React from 'react';

// You'll want to replace these with your actual project images
import projectImage1 from '../assets/sorting_visualizer.png'; 
import projectImage2 from '../assets/task_manager.png';

function Projects() {
  const projectData = [
    {
      title: 'Skimreads - Social Media App',
      description: 'A social media app built with React, Redux, Firebase, Express, and Vercel.',
      liveLink: '#',
      codeLink: '#',
      image: projectImage1,
    },
    {
      title: 'Chakra Chat - Messaging App',
      description: 'A real-time messaging application using modern web technologies.',
      liveLink: '#',
      codeLink: '#',
      image: projectImage2,
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