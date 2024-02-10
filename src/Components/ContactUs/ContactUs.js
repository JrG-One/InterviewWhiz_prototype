import React from 'react';
import './ContactUs.css'; // Import your CSS file for styling

const Contact = () => {
    return (
        <section className="contact section" id="contact">
          <h2 className="section-title">Contact us</h2>
    
          <div className="contact__container bd-grid">
            <div className="contact__info">
              <p>
                If you have any questions or inquiries, feel free to reach out to us. We'd love to
                hear from you!
              </p>
            </div>
            <form action="" className="contact__form">
              <div className="contact__inputs">
                <input type="text" placeholder="Name" className="contact__input" />
                <input type="mail" placeholder="E-mail" className="contact__input" />
              </div>
              <textarea
                placeholder="Write a message and quote your entrepreneurial idea"
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__input"
              ></textarea>
              <input type="button" value="Send" className="contact__button button" />
            </form>
          </div>
        </section>
      );
    };
    
    export default Contact;
