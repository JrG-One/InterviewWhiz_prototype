import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="section-intro">
        <h1>Empowering Your Tech Career Journeys (Replace with your website title)</h1>
        <p>
          (Replace this with a concise description of your website and value
          proposition. Highlight what makes your platform unique and the benefits
          users can expect.)
        </p>
      </div>

      {/* (Optional) Team Introduction */}
      <div className="team-introduction">
        <h3>Meet Our Experts (Optional - Replace with appropriate heading)</h3>
        <p>
          (Optional - Describe your team's expertise and how they can help
          users. Consider including brief bios or descriptions for key team
          members.)
        </p>
        <ul className="team-members">
          {/* Add list items for team members here (optional) */}
        </ul>
      </div>

      {/* User Stories */}
      <div className="user-stories">
        <h3>Success Stories (Replace with appropriate heading)</h3>
        <div className="story">
          <p>
            "Since using (your platform's name), I've landed my dream job at a
            top tech company. The AI feedback and personalized coaching were
            invaluable!" (Replace with a user testimonial)
          </p>
          <p className="story-author">-(Name of the user)</p>
        </div>
        {/* Add more user stories here */}
      </div>

      {/* Call to Action */}
      <div className="call-to-action">
        <a href="#" className="cta-button">
          Unlock Your Interview Potential Today! (Replace with clear call to action)
        </a>
        <p>
          (Optional - Add a brief description to further incentivize users to
          take the action, e.g., "Sign up for a free trial and experience the
          difference.")
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
