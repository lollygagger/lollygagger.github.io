import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';  // Global styles

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <nav>
                    <Link to="/">Home</Link> |
                    <Link to="/resume">Resume</Link>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
