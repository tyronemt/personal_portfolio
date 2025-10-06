import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact.</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/xanpbgkd" // <-- PASTE YOUR FORMPSREE URL HERE
        method="POST"
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="_replyto" placeholder="Email" required /> {/* Use _replyto for the email */}
        <textarea name="message" placeholder="Message" rows="5" required></textarea>
        <button type="submit" className="submit-button">SEND IT!</button>
      </form>
    </section>
  );
}

export default Contact;