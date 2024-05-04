import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="features-section">
        <div className="features-container">
          <div className="feature-group">
            <h3>Features</h3>
            <p>Explore the amazing features of our website.</p>
          </div>
          <div className="feature-row">
            <div className="feature-card">
              <h4>Feature 1</h4>
              <p>Description of feature 1.</p>
            </div>
            <div className="feature-card">
              <h4>Feature 2</h4>
              <p>Description of feature 2.</p>
            </div>
            {/* Add more feature cards here */}
          </div>
        </div>
      </div>
      <div className="usage">
        <h3 className="section-title">How to Use</h3>
        <ol className="steps">
          <li className="step">Step 1: Lorem ipsum dolor sit amet.</li>
          <li className="step">Step 2: Consectetur adipiscing elit.</li>
          <li className="step">Step 3: Sed do eiusmod tempor incididunt.</li>
          {/* Add more steps here */}
        </ol>
      </div>
    </div>
  );
};

export default AboutUs;
