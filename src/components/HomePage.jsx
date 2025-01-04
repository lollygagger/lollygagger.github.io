import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import '../Styles/components/HomePage.css';

// README:
//
// Plans for projects page - have projects stored in a map and have cards that they get displayed on
// each project will have skills associated with it and there will be a search bar where you can search through the projects
// by the skills used

function HomePage() {

    return (
        <>
            <Helmet>
                <title>Home - Max Burdett</title>
                <meta name="description" content="Welcome to the main content of my website."/>
            </Helmet>
            <div className="about-me">
                <h2>Welcome!</h2>

                <section className="about-section">
                    <h2>About Me</h2>
                    <p>
                        My name is <strong>Max Burdett</strong>, and I am a software engineer who is
                        constantly eager to learn new things. I'm currently based in <strong>Rochester, NY</strong> and
                        <strong> Fairfield, CT</strong>. I began programming when I was just 8 years old and I enjoy
                        writing software to automate many parts of my day to day life. I have worked with a large range
                        of technologies and I love getting the chance to learn something new!
                    </p>
                </section>

                <section className="education-section">
                    <h3>Education</h3>
                    <p>
                        I am currently studying at <strong>The Rochester Institute of Technology</strong> pursuing a
                        degree in Software Engineering. Some of my favorite subjects have been Software Processes and
                        Project Management, Cloud Computing, and Software Architecture.
                    </p>
                </section>

                <section className="hobbies-section">
                    <h3>Hobbies & Interests</h3>
                    <p>
                        Outside of my studies, I love to spend my time cooking, playing guitar, and traveling. These
                        activities help me unwind and allow me to explore my creativity. When I can find the time I
                        also enjoy working on my own personal projects which I find very fulfilling.
                    </p>
                </section>

                <section className="skills-section">
                    <h3>Programming Languages</h3>
                    <p>I have worked with many programming languages over the last 14 years, most recently I have been
                        learning Typescript, and C++ for work and various personal projects. I first started programming
                        in lua when I was just 8 years old making small video games and scripts. After that my cousin
                        taught me Java and Object-Oriented Programming which started my life long love of programming
                        and software architecture. </p>
                    <ul>
                        <li><strong>Java</strong> - 11 Years of Experience</li>
                        <li><strong>Python</strong> - 8 Years of Experience</li>
                        <li><strong>Javascript</strong> - 5 Years of Experience</li>
                        <li><strong>Typescript</strong> - 3 Years of Experience</li>
                        <li><strong>C</strong> - 2 Years of Experience</li>
                        <li><strong>C++</strong> - 1 Year of Experience</li>
                    </ul>
                </section>

                <section className="goals-section">
                    <h3>Goals</h3>
                    <p>
                       <li><strong>AWS Cloud Practitioner</strong> - I am currently studying to become an AWS Cloud
                           Practitioner and I am currently 90% complete with my studying. I hope to reach this goal
                           within the first quarter of 2025.</li>
                        <li><strong>Certified PMP</strong> - I have always greatly enjoyed project management and it is
                            a large future career goal of mine. While I do not expect to attain this certification very
                            soon it is a long term goal which I would like to reach. As of right now I have completed
                            the required education hours and I have completed 40% of the required hours as a project
                            manager.</li>
                    </p>
                </section>

                <section className="contact-section">
                    <h3>Contact</h3>
                    <p>
                        If you would like to get in touch, feel free to reach out to me via email at
                        <a href="mailto:maxkburdett@gmail.com"> maxkburdett@gmail.com</a>
                        or add me on LinkedIn:<a href="https://www.linkedin.com/in/max-burdett">linkedin.com/in/max-burdett</a>
                    </p>
                </section>
            </div>
        </>
    );
}

export default HomePage;
