import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links-footer">
        <a href="https://github.com/tyronemt" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/tyrone-tong/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
        <a href="mailto:tyrone.tong800@gmail.com"><FiMail /></a>
      </div>
    </footer>
  );
}

export default Footer;