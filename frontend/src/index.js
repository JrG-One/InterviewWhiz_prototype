import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import InterviewPortal from './Components/InterviewPortal/InterviewPortal';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import InterviewWhizTerminal from './Components/Terminal/Terminal';
import SignupComponent from './Components/RegisterForm/Registrationform';
import Resources from './Components/Resources/Resources';
import AboutUs from './Components/AboutUs/AboutUs';
import InterviewPage from './Components/PromptSection/PromptSection';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Parallax
                strength={500}
                style={{
                  height: 'auto',
                  overflow: 'hidden',
                  background: 'linear-gradient(to right, #1a1a1a, #000033)',
                }}
              >
                <div>
                  <Hero />
                  <Features />
                  {/* <InterviewWhizTerminal /> */}
                  <FAQ />
                  <Footer className="fixed-footer" />
                </div>
              </Parallax>

              
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer className="fixed-footer"/>
            </>
          }
        />
        <Route
          path="/interview-portal"
          element={
            <>
              <Navbar />
              <InterviewPortal />
              <Footer className="fixed-footer"/>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <SignupComponent signIn={true} />
              <Footer className="fixed-footer"/>
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <SignupComponent signIn={false} />
              <Footer className="fixed-footer"/>
            </>
          }
        />
        <Route
          path="/resource"
          element={
            <>
              <Navbar />
              <Resources />
              <Footer className="fixed-footer"/>
            </>
          }
        />
        <Route
          path="/prompt"
          element={
            <>
              
              <InterviewPage name="Ojaswa"
                targetCompany="Microsoft"
                experience={0}
                role="SDE" />
             
            </>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();