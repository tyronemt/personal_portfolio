import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Feel free to reach out! You can find me on:</p>
      <div className="contact-links">
        <a href="mailto:your.email@example.com">Email</a>
        <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;