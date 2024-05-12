import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="section-intro">
        <h1>Welcome to InterviewWhiz</h1>
        <p>
          InterviewWhiz is your go-to platform for mastering technical interviews and advancing your tech career. Our AI-driven tools provide personalized feedback and resources to help you succeed.
        </p>
      </div>

      <div className="team-introduction">
        <h3>Meet Our Experts</h3>
        <p>
          Our team consists of experienced professionals dedicated to helping you excel in interviews. With backgrounds in software engineering, data science, and more, we're here to support your journey.
        </p>
        {/* Add team members here if necessary */}
      </div>

      <div className="user-stories">
        <h3>Success Stories</h3>
        <div className="story">
          <p>
            "Thanks to InterviewWhiz, I landed a job at my dream company. The personalized feedback and interview preparation resources were invaluable!"
          </p>
          <p className="story-author">- John Doe</p>
        </div>
        {/* Add more user stories here if needed */}
      </div>

      <div className="call-to-action">
        <a href="#" className="cta-button">
          Start Your Journey with InterviewWhiz
        </a>
        <p>
          Sign up for free today and unlock your interview potential with InterviewWhiz's comprehensive tools and resources.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
