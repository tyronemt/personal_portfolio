import React from 'react';

// Data extracted from your resume.
const experienceData = [
  {
    [cite_start]title: "Software Developer", // [cite: 8]
    [cite_start]company: "United States Department of Defense United States Army Futures Command", // [cite: 9]
    [cite_start]location: "Picatinny Arsenal, NJ", // [cite: 10]
    [cite_start]dates: "Jan. 2024- Present", // [cite: 10]
    description: [
      [cite_start]"Developed, tested, and maintained the real-time embedded software responsible for controlling the M109A7 Paladin artillery system.", // [cite: 11]
      [cite_start]"Performed in-depth software analysis and implemented code for new features, system enhancements, and critical bug fixes.", // [cite: 12]
      [cite_start]"Authored detailed technical documentation, including software design and analysis papers, to support formal technical reviews and communicate project status to stakeholders.", // [cite: 13]
      [cite_start]"Translated complex project requirements and objectives into functional, high-quality code for software components and configuration items.", // [cite: 14]
      "Collaborated with peers and other government agencies to integrate software components, ensuring project goals were met according to technical specifications and schedules." [cite_start]// [cite: 15]
    ]
  },
  {
    [cite_start]title: "Software/NOC Engineer Intern", // [cite: 16]
    [cite_start]company: "Newegg Inc", // [cite: 17]
    [cite_start]location: "Rowland Heights, CA", // [cite: 18]
    [cite_start]dates: "Sep. 2020 Jan. 2022", // [cite: 18]
    description: [
      [cite_start]"Designed and implemented the Build-A-PC application using ReactJS and Java, resulting in a 20% improvement in component search speed and a 15% boost in user engagement.", // [cite: 19]
      [cite_start]"Established automated JavaScript and Python testing using Selenium and Robot libraries, improving site reliability and streamlining the testing process.", // [cite: 20]
      [cite_start]"Oversaw IT systems, including 100+ websites, internal applications, infrastructure, and 11 data centers, using Datadog and Pingdom to ensure optimal performance and availability.", // [cite: 21]
      "Verified and resolved issues by analyzing root causes and applying appropriate standard operating procedures, and identified areas for improvement in monitoring systems and methods." [cite_start]// [cite: 22]
    ]
  }
];

const Experience = () => {
  return (
    // You can replace the className with your own for styling
    <section id="experience" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((job, index) => (
          <div key={index} className="experience-item">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-md font-medium text-gray-600">
              {job.company}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              {job.location} | {job.dates}
            </p>
            <ul className="list-disc list-inside space-y-1">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;