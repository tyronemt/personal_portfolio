// Core Languages
import { SiJavascript, SiPython, SiCplusplus, SiExpress } from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; 

// Web/Frameworks
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiFlask, SiRubyonrails, SiNextdotjs } from 'react-icons/si';

// DevOps Tools
import { FaGitAlt, FaAws } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

// Testing
import { SiPostman, SiSelenium } from 'react-icons/si';

// Databases
import { SiMysql, SiMongodb } from 'react-icons/si';


function About() {
  return (
    <section id="about" className="section">
      <h2>About.</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I am a software developer with experience in both embedded systems and full-stack web development. Currently, I develop and maintain real-time embedded software for the M109A7 Paladin artillery system at the U.S. Department of Defense.
          </p>
          <p>
            Prior to my current role, I was an intern at Newegg, where I designed and implemented a "Build-A-PC" application using ReactJS and Java, which improved component search speed by 20% and boosted user engagement by 15%. My passion for building user-centric applications is also reflected in my personal projects, such as a full-stack MERN task manager and an interactive sorting algorithm visualizer.
          </p>
          <p>
            I hold a Bachelor of Science in Computer Science from the University of California Irvine and am now pursuing a Master of Science in the same field from Georgia Tech's Online Master of Science (OMSCS) program.
          </p>
        </div>
        
        <div className="skills-grid-container">
          {/* Languages */}
          <div className="skill-card"><FaJava /><span>Java</span></div>
          <div className="skill-card"><SiPython /><span>Python</span></div>
          <div className="skill-card"><SiJavascript /><span>JavaScript</span></div>
          <div className="skill-card"><SiCplusplus /><span>C/C++</span></div>
          <div className="skill-card"><span>Ada</span></div>


          {/* Web/Frameworks */}
          <div className="skill-card"><FaReact /><span>React</span></div>
          <div className="skill-card"><FaNodeJs /><span>Node.js</span></div>
          <div className="skill-card"><SiExpress /><span>Express.js</span></div>
          <div className="skill-card"><SiFlask /><span>Flask</span></div>
          <div className="skill-card"><SiRubyonrails /><span>Rails</span></div>
          <div className="skill-card"><FaHtml5 /><span>HTML</span></div>
          <div className="skill-card"><FaCss3Alt /><span>CSS</span></div>
          <div className="skill-card"><SiNextdotjs /><span>Next.js</span></div>

          {/* DevOps Tools */}
          <div className="skill-card"><FaGitAlt /><span>Git</span></div>
          <div className="skill-card"><FaAws /><span>AWS</span></div>
          <div className="skill-card"><SiGooglecloud /><span>GCP</span></div>

          {/* Testing */}
          <div className="skill-card"><SiPostman /><span>Postman</span></div> 
          <div className="skill-card"><SiSelenium /><span>Selenium</span></div>

          {/* Databases */}
          <div className="skill-card"><SiMysql /><span>MySQL</span></div>
          <div className="skill-card"><SiMongodb /><span>MongoDB</span></div>
        </div>
      </div>
    </section>
  );
}

export default About;