import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import { RiRobot3Fill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";
import './PromptSection.css';

const InterviewPage = ({ name, targetCompany, experience, role }) => {
  const feedbackSectionRef = useRef(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(60 * 60); // Assuming 60 minutes for the interview
  const [introIndex, setIntroIndex] = useState(0); // Index to control the typewriter effect
  const [showintro, setshowintro] = useState(true);
  const introduction = `Hello, ${name}. I'm your Personal Interviewer at InterviewWhiz. Nice to meet you. 
                        So, as I've seen, you have applied for ${role} position at ${targetCompany}.
                        let's begin your interview. Good luck!`;
  function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

useEffect(() => {
  const timer = setInterval(() => {
    if (introIndex < introduction.length) {
      setIntroIndex(prevIndex => prevIndex + 1);
    } else {
      clearInterval(timer);
      setTimeout(() => {
        setshowintro(false);
        generateRandomQuestions(targetCompany, experience, role, true, "C++")
          .then(generatedQuestion => {
            setQuestion(generatedQuestion);
          })
          .catch(error => {
            console.error('Error generating question:', error);
            setQuestion('Error generating question. Please try again.');
          });
      }, 3000); // Wait for 3 seconds before showing the question
    }
  }, 30);
  return () => clearInterval(timer);
}, [introIndex, introduction, experience, role, targetCompany]);

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000); // Change interval to 1 second
  
      // Clean up timer on component unmount
      return () => clearInterval(timer);
    }, []);

  const generateRandomQuestions = async (targetCompany, yearsOfExperience, jobRole, isCoding, preferredLanguage) => {
    try {
      const systemContext = "Please assume the role of an experienced Interviewer with over 20 years of experience in taking interviews for Software Engineer positions in India. The interviewer has a friendly and encouraging style.";

      let prompt = "";
      if(isCoding)
      {
        prompt = `We are interviewing a candidate for a ${jobRole} position with ${yearsOfExperience} years of experience in ${preferredLanguage} programming. 
        As the interviewer, what would be a good ${preferredLanguage} programming question of medium level to ask them to assess their coding skills and problem-solving abilities in the context of data structures and algorithms. Ensure that the questions prioritize topics such as trees, graphs, dynamic programming, and linked lists.? 
        **[Important] Provide response starting from question, test cases, and constraints in ${preferredLanguage} for a coding problem to assess understanding of problem solving. No explanations or interview dialogue.**`;
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
      const formattedquestion = generatedQuestion.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ));
  
      return formattedquestion;

    } catch (error) {
      console.error('Error generating questions:', error);
      return 'Error generating questions. Please try again.';
    }
  };

  const handleSubmit = async () => {
    const ele=document.getElementById('sub');
    ele.style.background = "linear-gradient(to right, #91dbf0, #383232)";
    if (feedbackSectionRef.current) {
      feedbackSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }
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
      const formattedfeedback = analyzeResponse.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ));
      return formattedfeedback;

    } catch (error) {
      console.error('Error generating feedback:', error);
      return 'Error generating feedback. Please try again.';
    }
  };

  return (
    <div className="interview-page">
      <div className='sections'>
          
        <div className="interviewer-section">
        <h2><RiRobot3Fill style={{ fontSize: '60px' , verticalAlign:'middle'}}/> Interviewer</h2>
        <hr/>
        {showintro &&
          <div className='intro'>
            <p>{introduction.slice(0, introIndex)}</p>
          </div>
        }
        {!showintro &&
        <div className='ques'>
          {/* <h3>Question:</h3> */}
          <p>{question}</p>
          </div>
        }
        </div>
        <div className="student-section">
          <div className='studtop'>
            <div className='name'>
              <h2><PiStudentFill style={{ fontSize: '60px', verticalAlign:'middle' }}/> {name}</h2>
            </div>
            <div className='timer'>
              <p className='time'><CircumIcon name="timer" size="2rem"/> Time Left: {formatTime(timeLeft)}</p>
              <button className='next'>Next Question</button>
              <button className='end'>End Interview</button>
              
            </div>
          </div>
          <div>
          <hr/>
          </div>
          <div className='editor'>
            <textarea
              value={answer}
              style={{ width: '98%', height: 'max-height' }}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
            />
          </div>
          <button id="sub" onClick={handleSubmit} style={{marginTop:'125px'}}>Submit for AI feedback</button>
        </div>
      </div>
      <div className='feedback' ref={feedbackSectionRef}>
        <h2><VscFeedback style={{ fontSize: '60px' , verticalAlign:'middle'}}/> AI Feedback</h2>
        <hr/>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default InterviewPage; 