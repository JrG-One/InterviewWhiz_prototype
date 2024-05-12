import React from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import "./Terminal.css";

const Terminal = () => {
  const terminalCommands = {
    whoami: () => (
      <div>
        <p>Welcome to InterviewWhiz Terminal!</p>
        <p>Type 'help' to see available commands.</p>
      </div>
    ),
    interviewwhiz: () => (
      <div>
        <p>
          InterviewWhiz is a comprehensive platform for honing your interview
          skills.
        </p>
        <p>
          Explore mock interviews, coding assessments, and more to excel in
          technical assessments.
        </p>
        <p>
          Visit our website:{" "}
          <a href="/aboutus">InterviewWhiz</a>
        </p>
      </div>
    ),
    "schedule-interview": () => (
      <div>
        <p>
          You can schedule a mock interview on InterviewWhiz to practice and
          improve your skills.
        </p>
        <p>
          Visit our scheduling page:{" "}
          <a href="interview-portal">
            Schedule Interview
          </a>
        </p>
      </div>
    ),
    "coding-assessment": () => (
      <div>
        <p>
          Explore coding assessments on InterviewWhiz to test and enhance your
          coding abilities.
        </p>
        <p>
          Visit our coding assessment page:{" "}
          <a href="/resource">Coding Assessment</a>
        </p>
      </div>
    ),
    feedback: () => (
      <div>
        <p>
          We appreciate your feedback! Feel free to share your thoughts and
          suggestions with us.
        </p>
        <p>
          Visit our feedback page:{" "}
          <a href="#">Feedback</a>
        </p>
      </div>
    ),
    help: () => (
      <div>
        <p>
          Available commands:
        </p>
        <ul>
          <li>whoami</li>
          <li>interviewwhiz</li>
          <li>schedule-interview</li>
          <li>coding-assessment</li>
          <li>feedback </li>
          <li>help - Displays this help message</li>
          <li>clear - Clears the screen</li>
        </ul>
      </div>
    ),
    clear: () => null,
  };

  return (
    <TerminalContextProvider>
      <h4 className="head">______Terminal______</h4>
      <div className="terminal-container" style={{ overflow: "hidden" }}>
        <ReactTerminal  
          prompt="$ interviewwhiz >> "
          welcomeMessage={
            <div>
              <p>
                Welcome to InterviewWhiz Terminal! Get started by typing `help`
                command below
              </p>
            </div>
          }
          themes={{
            codingStudent: {
              themeBGColor: "#1E1E1E", // Dark background color
              themeToolbarColor: "#333", // Dark toolbar color
              themeColor: "#D4D4D4", // Light text color
              themePromptColor: "#38CC77", // Bright prompt color
              themeFontFamily: "Courier New, monospace", // Retro font
            },
          }}
          theme="codingStudent" // Apply the custom theme
          commands={terminalCommands}
          style={{ overflow: "hidden" }}
        />
      </div>
    </TerminalContextProvider>
  );
};

export default Terminal;