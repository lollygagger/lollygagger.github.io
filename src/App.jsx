import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './Styles/App.css';
import ScrollToTop from "./ScrollToTop.js";
import Contact from "./components/Contact.jsx";

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <ScrollToTop />
                <main>
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
