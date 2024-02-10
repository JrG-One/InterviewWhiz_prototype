// src/components/InterviewPortal.js
import React from 'react';
import './InterviewPortal.css';
import CodeEditor from '../CodeEditor/CodeEditor';

const InterviewPortal = () => {
  const handleRunCode = (code) => {
    // Implement code execution or other actions
    console.log('Running code:', code);
  };

  const handleSubmitCode = (code) => {
    // Implement code submission or other actions
    console.log('Submitting code:', code);
  };

  return (
    <div className="interview-portal">
      <div className="left-section">
        <div className="prompt-section">
          <h2>Prompt Section</h2>
          <p>This is where the interview prompt will be displayed.</p>
        </div>
        <div className="interview-buttons">
          <button className="start-interview">Start Interview</button>
          <button className="end-interview">End Interview</button>
        </div>
      </div>
      <div className="right-section">
        <h2>Coding Editor</h2>
        <CodeEditor onRun={handleRunCode} onSubmit={handleSubmitCode} />
      </div>
    </div>
  );
};

export default InterviewPortal;
