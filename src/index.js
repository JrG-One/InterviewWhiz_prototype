/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client'; // Add this import
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
import Contact from './Components/ContactUs/ContactUs';
import InterviewWhizTerminal from './Components/Terminal/Terminal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
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
                    <InterviewWhizTerminal/>
                    <FAQ />
                  </div>
                </Parallax>
                
                <Footer className="fixed-footer" />
              </>
            }
          />
          <Route
            path="/interview-portal"
            element={
              <>
                <Navbar />
                <InterviewPortal />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
  </React.StrictMode>,
);

reportWebVitals();
