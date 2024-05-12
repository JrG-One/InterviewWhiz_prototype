import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Resources.css';

// Import JSON data
import resourcesData from './resourcedata.json';

const Resources = () => {
  const toggleAccordion = (index) => {
    const faq = document.querySelectorAll('.faq')[index];
    faq.classList.toggle('open');
  };

  return (
    <div className="faq-section">
      <h3>Resources that can help you to ACE your Interviews</h3>
      <p>Wouldn't it be nice to know which questions the recruiters will ask you (and how to answer them) before the interview?</p>
      <div className="faqs">
        {resourcesData.map((company, index) => (
          <div className="faq" key={index} onClick={() => toggleAccordion(index)}>
            <div className="faq-question">{company.companyName}</div>
            {company.questions.map((q, qIndex) => (
              <div className="faq-answer" key={qIndex}>
                <h4>{q.question}</h4>
                <a href={q.downloadLink} className="download-link">
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
