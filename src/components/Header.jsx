import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <nav className="nav-container">
                <a href="#" className="logo">YG<span>.</span></a>
                
                <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
                    <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                    <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" className="nav-link btn-primary" onClick={() => setIsMenuOpen(false)}>Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
