import {useEffect, useState} from 'react';
import '../Styles/components/Header.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import ScrollArrow from "./ScrollArrow.jsx";

function Header() {

    const navigate = useNavigate();

    const redirHome = () => {
        navigate('/');
    }

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Check if the user is on the homepage
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        if (isHomePage) {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            setIsScrolled(true);
        }
    }, [isHomePage]);

    return (
        <header className={`header ${isScrolled ? 'shrink' : ''}`}>
            <div className="header-content">
                <h1 onClick={redirHome}>Max Burdett</h1>
                <nav>
                    <Link to="/">Home</Link> |
                    <Link to="/projects">Projects</Link> |
                    <Link to="/resume">Resume</Link> |
                    <Link to="/contact">Contact Me</Link>
                </nav>

               <ScrollArrow isScrolled={isScrolled}/>
            </div>
        </header>
    );
}

export default Header;
