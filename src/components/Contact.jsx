import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../Styles/components/Contact.css';

const ContactPage = () => {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <div className="contact-links">
                <div className="contact-item">
                    <a href="https://github.com/lollygagger" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                        <span>GitHub</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/maxburdett" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        <span>LinkedIn</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a href="mailto:maxkburdett@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <span>Email</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a href="tel:+12035055265">
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                        <span>Phone</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
