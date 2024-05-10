import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const textToType = 'Practice your coding skills and ace your Interviews......';
  const typingSpeed = 50; // Adjust the speed in milliseconds
  const restartInterval = 8000; // Restart interval in milliseconds

  const startTypingAnimation = useCallback(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(textToType.substring(0, index));
      index++;
      if (index > textToType.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedText('');
          startTypingAnimation();
        }, restartInterval);
      }
    }, typingSpeed);
  }, [textToType, restartInterval, typingSpeed]);

  useEffect(() => {
    startTypingAnimation();

    return () => {
      // Cleanup if needed
    };
  }, [startTypingAnimation]); // Empty dependency array means the effect runs once after the initial render

  const handleGetStarted = () => {
    navigate('/interview-portal');
  };

  return (
    <section className="hero-section">
      <h2 style={{ transition: `opacity ${typingSpeed / 2}ms ease-in-out` }}>{typedText}</h2>
      <div className="cta-buttons">
        <button onClick={handleGetStarted}>Get Started</button>
        <a href="/aboutus">
          <p className="learn-more">Learn More.....</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;