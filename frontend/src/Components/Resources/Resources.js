import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Resources.css';

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
        <div className="faq" onClick={() => toggleAccordion(0)}>
          <div className="faq-question">Google</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for Freshers</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
          <div className="faq-answer">
            <h4>100 Interview Questions for Freshers</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
          <div className="faq-answer">
            <h4>100 Interview Questions for Freshers</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>

        <div className="faq" onClick={() => toggleAccordion(1)}>
          <div className="faq-question">Company 2</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for 1 Year Experienced</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>
        <div className="faq" onClick={() => toggleAccordion(1)}>
          <div className="faq-question">Company 3</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for 1 Year Experienced</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>
        <div className="faq" onClick={() => toggleAccordion(1)}>
          <div className="faq-question">Company 4</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for 1 Year Experienced</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>
        <div className="faq" onClick={() => toggleAccordion(1)}>
          <div className="faq-question">Company 5</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for 1 Year Experienced</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>
        <div className="faq" onClick={() => toggleAccordion(1)}>
          <div className="faq-question">Company 6</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for 1 Year Experienced</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>
        <div className="faq" onClick={() => toggleAccordion(1)}>
          <div className="faq-question">Company 7</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for 1 Year Experienced</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>
        <div className="faq" onClick={() => toggleAccordion(1)}>
          <div className="faq-question">Company 8</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for 1 Year Experienced</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>
        <div className="faq" onClick={() => toggleAccordion(1)}>
          <div className="faq-question">Company 9</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for 1 Year Experienced</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>
        <div className="faq" onClick={() => toggleAccordion(1)}>
          <div className="faq-question">Company 10</div>
          <div className="faq-answer">
            <h4>100 Interview Questions for 1 Year Experienced</h4>
            <a href="#" className="download-link">
              <FontAwesomeIcon icon={faDownload} />
              
            </a>
          </div>
        </div>
        {/* Add more companies here */}
      </div>
    </div>
  );
};

export default Resources;
