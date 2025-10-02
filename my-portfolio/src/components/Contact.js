import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact.</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="5" required></textarea>
        <button type="submit" className="submit-button">SEND IT!</button>
      </form>
    </section>
  );
}

export default Contact;