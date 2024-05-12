import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InterviewPortal.css';
import Lottie from 'react-lottie';
import animationData from './animation.json';

const InterviewPortal = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    name: '',
    company: '',
    role: '',
    experience: '', 
    language: '',
    codingRound: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      name: userData.name,
      company: userData.company,
      role: userData.role,
      experience: userData.experience,
      language: userData.language,
      codingRound: userData.codingRound, 
    });
    localStorage.setItem('userData', JSON.stringify(userData));  
    console.log('User data:', userData);
    setFormSubmitted(true);
    setTimeout(() => {
      navigate('/prompt');
    }, 3000);
  };

  return (
    <div className="interview-portal">
      {!formSubmitted && (
        <h1 className="interview-heading">Add your Details and get the magic of AI</h1>
      )}
      <div className={formSubmitted ? "prompt-section" : "form-container"}>
        {!formSubmitted && (
          <div className="left-section">
           <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
              }}
              height={970} // Adjust height as needed
              width={1000} // Adjust width as needed
            />
          </div>
        )}
        {!formSubmitted ? (
          <div className="right-section">
            <h2>Interview Information</h2>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                  />
                </div>
              )}
              {step === 2 && (
                <div>
                  <label>Targeted Company:</label>
                  <input
                    type="text"
                    name="company"
                    value={userData.company}
                    onChange={handleChange}
                  />
                </div>
              )}
              {step === 3 && (
                <div>
                  <label>Job Role:</label>
                  <input
                    type="text"
                    name="role"
                    value={userData.role}
                    onChange={handleChange}
                  />
                </div>
              )}
              {step === 4 && (
                <div>
                  <label>Experience:</label>
                  <input
                    type="text"
                    name="experience"
                    value={userData.experience}
                    onChange={handleChange}
                  />
                </div>
              )}
              {step === 5 && (
                <div>
                  <label>Preferred Language:</label>
                  <input
                    type="text"
                    name="language"
                    value={userData.language}
                    onChange={handleChange}
                  />
                </div>
              )}
              {step === 6 && (
                <div>
                <input
                  type="checkbox"
                  id="codingRound"
                  name="codingRound"
                  className="checkbox-input"
                  checked={userData.codingRound}
                  onChange={handleChange}
                />
                <label className="checkbox-label" htmlFor="codingRound">
                  if coding round then tick otherwise submit!
                </label>
              </div>
              )}
              {step !== 6 && (
                <button type="button" onClick={handleNextStep}>Next</button>
              )}
              {step === 6 && <button type="submit">Submit</button>}
            </form>
          </div>
        ) : (
          <div className="form-submitted">
            <h1 className="interview-heading">Wait for the magic...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewPortal;
