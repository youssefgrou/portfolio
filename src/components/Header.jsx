import { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock background scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <header className="header">
            {/* Backdrop overlay for closing the drawer on mobile click outside */}
            {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>}
            
            <nav className="nav-container">
                <a href="#" className="logo">YG<span>.</span></a>
                
                <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
                    <li className="drawer-only drawer-header" style={{ '--item-index': 0 }}>
                        <span className="drawer-logo">YG<span>.</span></span>
                    </li>
                    
                    <li style={{ '--item-index': 1 }}>
                        <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            About
                        </a>
                    </li>
                    <li style={{ '--item-index': 2 }}>
                        <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Skills
                        </a>
                    </li>
                    <li style={{ '--item-index': 3 }}>
                        <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Experience
                        </a>
                    </li>
                    <li style={{ '--item-index': 4 }}>
                        <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Projects
                        </a>
                    </li>
                    <li style={{ '--item-index': 5 }}>
                        <a href="#contact" className="nav-link btn-primary" onClick={() => setIsMenuOpen(false)}>
                            Contact Me
                        </a>
                    </li>
                    
                    <li className="drawer-only drawer-footer" style={{ '--item-index': 6 }}>
                        <div className="drawer-divider"></div>
                        <div className="drawer-socials">
                            <a href="mailto:grouateyoussef0@gmail.com" title="Email">📧</a>
                            <a href="tel:+212678420419" title="Phone">📱</a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">🐙</a>
                        </div>
                        <p className="drawer-copyright">&copy; 2026 YG. Designed with creativity.</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
