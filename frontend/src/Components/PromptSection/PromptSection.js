import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PromptSection.css';

const InterviewPage = ({ name, targetCompany, experience, role }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(60); // Assuming 60 minutes for the interview
  const [introIndex, setIntroIndex] = useState(0); // Index to control the typewriter effect
  const introduction = `Hello, ${name}. I'm your Personal Interviewer at InterviewWhiz. Nice to meet you. 
                        So, as I've seen, you have applied for ${role} position at ${targetCompany}.
                        Here is your 1st Question. You have to solve it within one hour`; // Introduction by the Interviewer

  useEffect(() => {
    const timer = setInterval(() => {
      if (introIndex < introduction.length) {
        setIntroIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(timer);
        generateRandomQuestions(targetCompany, experience, role, true, "C++")
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
  }, [introIndex, introduction, experience, role, targetCompany]);

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
      const systemContext = `Please assume the role of an experienced Interviewer with over 20 years of experience in taking interviews for ${jobRole} positions in India. The interviewer has a friendly and encouraging style.`;

      let prompt = "";
      if(isCoding)
      {
        prompt = `We are interviewing a candidate for a ${jobRole} position with ${yearsOfExperience} years of experience in ${preferredLanguage} programming. 
        As the interviewer, what would be a good ${preferredLanguage} programming data structrues and alogorithm (DSA) based to ask them to assess their understanding of programming and data structrues and alogorithm (DSA)? 
        **[Important] Provide ONLY the question, test cases, and constraints in ${preferredLanguage} for a coding problem to assess understanding of problem solving. No explanations or interview dialogue.**`;
      }
      else 
      {
        // Construct prompt based on user inputs
        prompt = `We are interviewing a candidate for a ${jobRole} position with ${yearsOfExperience} years of experience. 
        As the interviewer, what would be a good theoritical question to ask them to assess their knowledge? 
        ** [Important] Provide ONLY the question to assess understanding of candidate. No explanations or interview dialogue.**`;
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
      const systemContext = "Please assume the role of an experienced Interviewer with over 20 years of experience in taking interviews for Software Engineer positions in India. The interviewer has a friendly and encouraging style.";
      let prompt = "";
        
      const areasOfAnalysis = ["Correctness", "edge cases", "efficiency"]; // You can modify this list

      prompt = `We are analyzing a candidate's solution to assess understanding of problem solving. The question is ${question}.
      **Provided Code:**
      ${solution}
      **Analyze the provided code based on the following areas:**
      * ${areasOfAnalysis.join("\n  * ")}
      * **Correctness:** Does the code produce the expected output for the provided test cases? If not, identify discrepancies and suggest potential fixes.
      * **Edge Cases:** Are there any scenarios the code might not handle correctly? Suggest potential edge cases and how the code could be improved to address them.
      * **Efficiency:** Can the code be optimized for better performance (time or space complexity)? If so, suggest potential improvements.
        
      **Note:** 
    - Focus on the core logic of the problem and solution approach.
      **Directly provide feedback without any additioal message apart from feedback, directly addressing the candidate. Please be crisp and provide in consize way**
      `;
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