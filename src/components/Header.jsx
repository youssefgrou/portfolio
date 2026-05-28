

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <a href="#" className="logo">YG<span>.</span></a>
                <ul className="nav-links">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#contact" className="nav-link btn-primary">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
