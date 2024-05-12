// src/components/Footer/Footer.js
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Don't forget to create the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="foot-left-section">
        <p>© 2024 InterviewWhiz All Rights Reserved</p>
        <p>Developed by Ojaswa Varshney</p>
      </div>
      <div className="foot-right-section">
        <a
          href="https://github.com/JrG-One/SE_Project/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <span> | </span>
        <a
          href="https://www.linkedin.com/in/ojaswavarshney/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
