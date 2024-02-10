// src/components/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="feature-group">
          <h3>Features</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula metus eu
            nulla rhoncus, ac consectetur mauris consectetur.
          </p>
        </div>
        <div className="feature-row">
          <div className="feature-card">
            <h4>Feature 1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature-card">
            <h4>Feature 2</h4>
            <p>Nullam vehicula metus eu nulla rhoncus, ac consectetur mauris consectetur.</p>
          </div>
        </div>
        <div className="feature-row">
          <div className="feature-card">
            <h4>Feature 3</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature-card">
            <h4>Feature 4</h4>
            <p>Nullam vehicula metus eu nulla rhoncus, ac consectetur mauris consectetur.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
