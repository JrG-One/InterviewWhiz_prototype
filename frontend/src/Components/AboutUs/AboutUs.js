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
        <p>
          At InterviewWhiz, we understand that technical interviews can be daunting. That's why we've created a platform designed to empower candidates with the skills and confidence needed to excel in these challenging assessments. Our comprehensive suite of AI-driven tools offers personalized feedback, targeted resources, and expert guidance to help individuals navigate every stage of the interview process with ease. Whether you're a seasoned professional looking to brush up on your skills or a newcomer to the tech industry seeking to break into the field, InterviewWhiz is your trusted partner on the journey to success.
        </p>
      </div>

      <div className="team-introduction">
        <h3>Meet Our Experts</h3>
        <p>
          Our team consists of experienced professionals dedicated to helping you excel in interviews. With backgrounds in software engineering, data science, and more, we're here to support your journey.
        </p>
        <ul className="team-members">
          <li>Ojaswa Varshney - Software Engineer</li>
          <li>Sakshi Varshney - Software Engineer</li>
        </ul>
      </div>

      <div className="user-stories">
        <h3>Success Stories</h3>
        <div className="story">
          <p>
            "Thanks to InterviewWhiz, I landed a job at my dream company. The personalized feedback and interview preparation resources were invaluable!"
          </p>
          <p className="story-author">- Nilesh Agrawal</p>
        </div>
        <div className="story">
          <p>
            "InterviewWhiz helped me brush up on my technical skills and boost my confidence. I got multiple job offers after using the platform!"
          </p>
          <p className="story-author">- Adarsh Singh</p>
        </div>
        {/* Add more user stories here if needed */}
      </div>

      <div className="call-to-action">
        <a href="/register" className="cta-button">
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
