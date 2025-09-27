import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Your Name</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;