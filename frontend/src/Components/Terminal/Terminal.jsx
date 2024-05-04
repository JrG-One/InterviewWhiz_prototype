import React from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import "./Terminal.css";

const Terminal = () => {
  const terminalCommands = React.useMemo(() => {
    return {
      whoami: {
        help: "Tells you who you are",
        action: (
          <div>
            <p>Welcome to InterviewWhiz Terminal!</p>
            <p>Type 'help' to see available commands.</p>
          </div>
        ),
      },

      interviewwhiz: {
        help: "Learn more about InterviewWhiz",
        action: (
          <div>
            <p>
              InterviewWhiz is a comprehensive platform for honing your
              interview skills.
            </p>
            <p>
              Explore mock interviews, coding assessments, and more to excel in
              technical assessments.
            </p>
            <p>
              Visit our website:{" "}
              <a href="https://www.interviewwhiz.com">InterviewWhiz</a>
            </p>
          </div>
        ),
      },

      "schedule-interview": {
        help: "Schedule a mock interview on InterviewWhiz",
        action: (
          <div>
            <p>
              You can schedule a mock interview on InterviewWhiz to practice and
              improve your skills.
            </p>
            <p>
              Visit our scheduling page:{" "}
              <a href="https://www.interviewwhiz.com/schedule">
                Schedule Interview
              </a>
            </p>
          </div>
        ),
      },

      "coding-assessment": {
        help: "Access coding assessments on InterviewWhiz",
        action: (
          <div>
            <p>
              Explore coding assessments on InterviewWhiz to test and enhance
              your coding abilities.
            </p>
            <p>
              Visit our coding assessment page:{" "}
              <a href="./coding-assessment">
                Coding Assessment
              </a>
            </p>
          </div>
        ),
      },

      feedback: {
        help: "Provide feedback on InterviewWhiz",
        action: (
          <div>
            <p>
              We appreciate your feedback! Feel free to share your thoughts and
              suggestions with us.
            </p>
            <p>
              Visit our feedback page:{" "}
              <a href="https://www.interviewwhiz.com/feedback">Feedback</a>
            </p>
          </div>
        ),
      },
    };
  }, []);

  return (
    <TerminalContextProvider>
      <h4 className="head">______Terminal______</h4>
      <div className="terminal-container">
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
            darkDefault: {
              themeBGColor: "",
              themeToolbarColor: "",
              themeColor: "#38CC77",
              themePromptColor: "#fff",
            },
          }}
          theme="darkDefault"
          commands={{
            ...Object.keys(terminalCommands).reduce(
              (b, key) => ({ ...b, [key]: terminalCommands[key].action }),
              {}
            ),
            help: (
              <div style={{ marginTop: "5px" }}>
                <p>Available Commands:</p>
                {Object.keys(terminalCommands).map((key) => (
                  <p key={key}>
                    <span style={{ color: "#38CC77" }}>{key}:</span>{" "}
                    {terminalCommands[key].help}
                  </p>
                ))}
                <p>
                  <span style={{ color: "#38CC77" }}>clear:</span> clears out
                  everything on screen!
                </p>
              </div>
            ),
          }}
        />
      </div>
    </TerminalContextProvider>
  );
};

export default Terminal;
