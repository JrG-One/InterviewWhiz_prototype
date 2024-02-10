// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css'; // Don't forget to create the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="foot-left-section">
        <p>© 2024 InterviewWhiz All Rights Reserved</p>
      </div>
      <div className="foot-right-section">
        <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
