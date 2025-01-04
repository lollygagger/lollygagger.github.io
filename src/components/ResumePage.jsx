import React from 'react';
import { Helmet } from 'react-helmet';
import '../Styles/components/ResumePage.css';

function ResumePage() {
    return (
        <>
            <Helmet>
                <title>Resume - Max Burdett</title>
                <meta name="description" content="This is my professional resume showcasing my experience and skills." />
            </Helmet>
            <div className="resume-container">
                <div className="resume">
                    <h2>My Resume</h2>
                    <iframe
                        src="/assets/MaxBurdett-Resume.pdf"
                        title="My Resume"
                        className="pdf-iframe"
                    />
                </div>
            </div>
        </>
    );
}

export default ResumePage;
