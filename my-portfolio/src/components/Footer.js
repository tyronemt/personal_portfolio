import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links-footer">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
        <a href="mailto:your.email@example.com"><FiMail /></a>
      </div>
    </footer>
  );
}

export default Footer;