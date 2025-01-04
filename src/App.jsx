import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage.jsx';
import Footer from './components/Footer';
import ResumePage from './components/ResumePage.jsx';
import './Styles/App.css';
import ScrollToTop from "./ScrollToTop.js";
import Contact from "./components/ContactPage.jsx";
import ProjectsPage from "./components/projects/ProjectsPage.jsx";

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <ScrollToTop />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/resume" element={<ResumePage />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
