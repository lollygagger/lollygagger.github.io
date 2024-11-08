import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import './MainContent.css';

function MainContent() {
    return (
        <>
            <Helmet>
                <title>Main Content - My Personal Website</title>
                <meta name="description" content="Welcome to the main content of my website." />
            </Helmet>
            <main>
                <h2>Welcome to My Main Content</h2>
                <br></br>
                <p>This is where the main content of the website will go.</p>
            </main>
        </>
    );
}

export default MainContent;
