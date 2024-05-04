import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PromptSection.css';

const InterviewPage = ({ name, targetCompany, experience, role }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(60); // Assuming 60 minutes for the interview
  const [introIndex, setIntroIndex] = useState(0); // Index to control the typewriter effect
  const introduction = `Hello, ${name}. I'm your Personal Interviewer at Interview Whiz. Nice to meet you. 
                        So, as I've seen, you have applied for ${role} position at ${targetCompany}.
                        Here is your 1st Question. You have to solve it within one hour`; // Introduction by the Interviewer

  useEffect(() => {
    const timer = setInterval(() => {
      if (introIndex < introduction.length) {
        setIntroIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(timer);
        generateRandomQuestions(targetCompany, experience, role, false, "C++")
          .then(generatedQuestion => {
            setQuestion(generatedQuestion);
          })
          .catch(error => {
            console.error('Error generating question:', error);
            setQuestion('Error generating question. Please try again.');
          });
      }
    }, 30);
    return () => clearInterval(timer);
  }, [introIndex, introduction]); // Run effect whenever introIndex or introduction changes

  // Timer function to update time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 10000);
    // Clean up timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const generateRandomQuestions = async (targetCompany, yearsOfExperience, jobRole, isCoding, preferredLanguage) => {
    try {
      const systemContext = "You are a non AI interviewer who is conducting an interview for a candidate applying for a job role at a target company.";

      let prompt = "";
      if (isCoding) {
        // Construct prompt based on user inputs
        prompt = `You are a non AI interviewer [Important] Just Directly Generate a Coding question only in ${preferredLanguage} programming with proper test cases (without answer) for a candidate applying for a ${jobRole} position at ${targetCompany} with ${yearsOfExperience} years of experience. Provide test cases for coding questions. Provide response starting from question only`;
      } else {
        // Construct prompt based on user inputs
        prompt = `You are a non AI interviewer [Important] Directly Generate a Theoretical question (without answer) for a candidate applying for a ${jobRole} position at ${targetCompany} with ${yearsOfExperience} years of experience.`;
      }

      const apiUrl = "https://openaitestdeepak.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2024-02-15-preview";

      const requestBody = {
        messages: [
          { role: "system", content: systemContext },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 4000,
        stop: null,
      };

      const headers = {
        "Content-Type": "application/json",
        "api-key": "a7781fcdd8614917a206a8e319dc39e0",
      };
      const response = await axios.post(apiUrl, requestBody, { headers });
      const responseData = response.data;

      const generatedQuestion = responseData.choices[0].message.content;

      return generatedQuestion;

    } catch (error) {
      console.error('Error generating questions:', error);
      return 'Error generating questions. Please try again.';
    }
  };

  const handleSubmit = async () => {
    try {
      const feedback = await generateFeedback(question, answer);
      setFeedback(feedback);
    } catch (error) {
      console.error('Error generating feedback:', error);
      setFeedback('Error generating feedback. Please try again.');
    }
  };

  const generateFeedback = async (question, solution) => {
    try {
      const systemContext = "Assistant is an intelligent chatbot designed to act as an Interviewer who can analyze the solution of the question provided by the candidate and provide feedback to the candidate.";

      const prompt = `[Behave like an actual non AI interviewer] You have asked this ${question} to the candidate and Candidate provided this ${solution}. Analyze the solution of the candidate and provide crisp feedback to the candidate for his/her solution.`;

      const apiUrl = "https://openaitestdeepak.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2024-02-15-preview";

      const requestBody = {
        messages: [
          { role: "system", content: systemContext },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 4000,
        stop: null,
      };

      const headers = {
        "Content-Type": "application/json",
        "api-key": "a7781fcdd8614917a206a8e319dc39e0",
      };
      const response = await axios.post(apiUrl, requestBody, { headers });
      const responseData = response.data;

      const analyzeResponse = responseData.choices[0].message.content;

      return analyzeResponse;

    } catch (error) {
      console.error('Error generating feedback:', error);
      return 'Error generating feedback. Please try again.';
    }
  };

  return (
    <div className="interview-page">
      <div className="interviewer-section">
        <h2>Interviewer</h2>
        <h3>Introduction:</h3>
        <p>{introduction.slice(0, introIndex)}</p>
        <h3>Question:</h3>
        <p>{question}</p>
        <h3>Feedback:</h3>
        <p>{feedback}</p>
      </div>
      <div className="student-section">
        <p>Time Left: {timeLeft} minutes</p>
        <textarea
          value={answer}
          style={{ width: '100%', height: 'max-height' }}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer..."
        />
        <button onClick={handleSubmit}>Submit Answer</button>
      </div>
    </div>
  );
};

export default InterviewPage; 