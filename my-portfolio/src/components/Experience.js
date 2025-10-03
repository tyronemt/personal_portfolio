import React from 'react';
import './Experience.css'; // We will replace the styles in this file

// Add a 'tags' array to each job object
const experienceData = [
  {
    role: 'Software Developer',
    company: 'United States Department of Defense',
    dates: 'Jan. 2024 - Present',
    description: [
      'Developed, tested, and maintained real-time embedded software for the M109A7 Paladin artillery system.',
      'Performed in-depth software analysis and implemented code for new features, system enhancements, and critical bug fixes.',
      'Authored detailed technical documentation to support formal technical reviews and communicate project status to stakeholders.',
    ],
    tags: ['Ada', 'C++', 'Embedded Systems', 'Real-Time OS'],
  },
  {
    role: 'Software/NOC Engineer Intern',
    company: 'Newegg Inc',
    dates: 'Sep. 2020 - Jan. 2022',
    description: [
      'Designed and implemented the Build-A-PC application using ReactJS and Java, resulting in a 20% improvement in component search speed.',
      'Established automated JavaScript and Python testing using Selenium and Robot libraries, improving site reliability.',
      'Oversaw IT systems, including 100+ websites, internal applications, and 11 data centers, using Datadog and Pingdom.',
    ],
    tags: ['React', 'Java', 'Python', 'Selenium', 'Datadog'],
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((job, index) => (
          <article key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{job.role}</h3>
                <span>{job.dates}</span>
              </div>
              <p className="company-name">{job.company}</p>
              <ul>
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="tags-container">
                {job.tags.map((tag, i) => (
                  <span key={i} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;