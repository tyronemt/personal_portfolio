import React from 'react';

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience / Projects</h2>
      <div className="experience-item">
        <h3>Software Engineer at Tech Company</h3>
        <p><em>Jan 2023 - Present</em></p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js.</li>
          <li>Collaborated with a team of 5 to build a customer-facing dashboard.</li>
          <li>Improved application performance by 20% through code optimization.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Project: Sorting Visualizer</h3>
        <p><em>A personal project to visualize sorting algorithms.</em></p>
        <ul>
          <li>Built with React to provide an interactive user interface.</li>
          <li>Implemented algorithms like Bubble Sort, Merge Sort, and Quick Sort.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;