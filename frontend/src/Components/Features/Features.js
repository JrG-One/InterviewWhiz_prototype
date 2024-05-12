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
          Practice job interview questions tailored to your job description. Get instant AI feedback and suggestions to improve your answers.
          </p>
        </div>
        <div className="feature-row">
          <div className="feature-card">
            <h4>Mock Interviews Anytime, Anywhere</h4>
            <p>
              Schedule or start a mock interview session at your convenience,
              regardless of location or time.
            </p>
          </div>
          <div className="feature-card">
            <h4>Download Resources</h4>
            <p>
              Access and download valuable resources like common tech
              interview questions and answer templates.
            </p>
          </div>
        </div>
        <div className="feature-row">
          <div className="feature-card">
            <h4>AI-Generated Feedback</h4>
            <p>
              Receive real-time and comprehensive feedback on your interview
              performance driven by AI analysis.
            </p>
          </div>
          <div className="feature-card">
            <h4>Full Analysis Report</h4>
            <p>
              Get a detailed report after each interview, summarizing your
              strengths, weaknesses, and areas for improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
