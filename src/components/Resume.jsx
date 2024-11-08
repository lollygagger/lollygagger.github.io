import React from 'react';
import { Helmet } from 'react-helmet';
import './Resume.css';

function Resume() {
    return (
        <>
            <Helmet>
                <title>My Resume - Max Burdett</title>
                <meta name="description" content="This is my professional resume showcasing my experience and skills." />
            </Helmet>
            <div className="resume-container">
                <div className="resume">
                    <h2>My Resume</h2>
                    <iframe
                        src="/assets/MaxBurdettResume.pdf"
                        title="My Resume"
                        className="pdf-iframe"
                    />
                </div>
            </div>
        </>
    );
}

export default Resume;
