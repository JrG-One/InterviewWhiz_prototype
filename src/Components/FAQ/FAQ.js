// src/Components/FAQ/FAQ.js
import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
        question: "What is InterviewWhiz, and how can it benefit me in my job preparation?",
        answer: "InterviewWhiz is a Mock Tech Interviews platform designed to help you excel in technical assessments. We simulate real-world interview scenarios, providing a realistic experience. With various interview types, including technical, behavioral, and coding assessments, you can receive feedback, identify areas for improvement, and boost confidence.",
        open: false,
      },
      {
        question: "How do I schedule a mock tech interview?",
        answer: "Log in, go to Schedule Interview, and choose a date, time, and interview type.",
        open: false,
      },
      {
        question: "How long does a mock tech interview typically last?",
        answer: "Technical: 45-60 minutes, Behavioral: 30-45 minutes.",
        open: false,
      },
      {
        question: "What types of interviews do you offer?",
        answer: "We offer behavioral, technical, and coding assessments.",
        open: false,
      },
      {
        question: "Can I receive feedback after the mock interview?",
        answer: "Yes, detailed feedback is provided after the mock interview.",
        open: false,
      },
      {
        question: "Is there a limit to the number of mock interviews I can schedule?",
        answer: "No strict limit on the number of mock interviews you can schedule.",
        open: false,
      },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq, open: false };
        }
      })
    );
  };

  return (
    <section className="Faq-Section">
        <h3>Frequnetly Asked Questions : </h3>
    <div className="faqs">
      {faqs.map((faq, index) => (
        <div
          className={"faq " + (faq.open ? "open" : "")}
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">{faq.question}</div>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default FAQ;
