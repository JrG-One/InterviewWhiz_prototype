import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InterviewPortal.css';

const InterviewPortal = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    name: '',
    company: '',
    role: '',
    experience: '', 
    language: '',
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
    });
    localStorage.setItem('userData', JSON.stringify(userData));  
    console.log('User data:', userData);
    setFormSubmitted(true);
    setTimeout(() => {

      navigate('/prompt');
    }, 5000);
  };

  return (
    <div className="interview-portal">
      {!formSubmitted && (
      <h1 className="interview-heading">Add your Details and get the magic of AI</h1>
      )}
      <div className={formSubmitted ? "prompt-section" : "left-section"}>
        {formSubmitted ? (
          <div className="form-submitted">
            <h1 className="interview-heading">Wait for the magic...</h1>
          </div>
        ) : (
          <div className="form-container">
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
              {step !== 5 && (
                <button type="button" onClick={handleNextStep}>Next</button>
              )}
              {step === 5 && <button type="submit">Submit</button>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewPortal;
