import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../Styles/components/ContactPage.css';
import {Helmet} from "react-helmet";

const ContactPage = () => {
    return (
        <div className="contact-container">
            <Helmet>
                <title>Contact Me - Max Burdett</title>
                <meta name="description" content="Contact Details!"/>
            </Helmet>
            <h2>Contact Me</h2>
            <div className="contact-links">
                <div className="contact-item">
                    <a href="https://github.com/lollygagger" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                        <span>GitHub</span>
                        <span>lollygagger</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/max-burdett" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        <span>LinkedIn</span>
                        <span>/in/max-burdett</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a href="mailto:maxkburdett@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                        <span>Email</span>
                        <span>maxkburdett@gmail.com</span>
                    </a>
                </div>

                <div className="contact-item">
                    <a href="tel:+12035055265">
                        <FontAwesomeIcon icon={faPhone} size="2x"/>
                        <span>Phone</span>
                        <span>(203) 505-5265</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
