// src/ContactUs.js

import React from 'react';
import './Styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-section">
        <h2>Our Team</h2>
        <div className="contact-card">
          <h3>Shreeniwas</h3>
          <p>Email: <a href="mailto:shree@gmail.com">shree@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/shree" target="_blank" rel="noopener noreferrer">linkedin.com/in/shree</a></p>
          <p>Twitter: <a href="https://twitter.com/shree" target="_blank" rel="noopener noreferrer">@shree</a></p>
        </div>
        <div className="contact-card">
          <h3>Arti</h3>
          <p>Email: <a href="mailto:Arti@gmail.com">Arti@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/Arti" target="_blank" rel="noopener noreferrer">linkedin.com/in/Arti</a></p>
          <p>Twitter: <a href="https://twitter.com/Arti" target="_blank" rel="noopener noreferrer">@Arti</a></p>
        </div>
        <div className="contact-card">
          <h3>Uday</h3>
          <p>Email: <a href="mailto:Uday.lee@gmail.com">Uday.lee@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/Uday" target="_blank" rel="noopener noreferrer">linkedin.com/in/Uday</a></p>
          <p>Twitter: <a href="https://twitter.com/Uday" target="_blank" rel="noopener noreferrer">@Uday</a></p>
        </div>
      </div>
      <div className="contact-section">
        <h2>Main Office</h2>
        <p>Dorm Discover's</p>
        <p>123 Business Street, Suite 456</p>
        <p>Baramati, Maharastra, 413102</p>
        <p>INDIA</p>
        <p>Contact Number: +1 (123) 456-7890</p>
      </div>
    </div>
  );
};

export default ContactUs;
