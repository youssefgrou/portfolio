

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="section-header reveal">
                <h2>About <span>Me</span></h2>
            </div>
            <div className="about-content reveal">
                <div className="about-text">
                    <p>I am a passionate Full-Stack Developer with a background in Computer Science and Economics. I enjoy bringing ideas to life in the browser and creating applications that are not only functional but also visually stunning.</p>
                    
                    <div className="languages">
                        <h3>Languages</h3>
                        <div className="lang-tags">
                            <span className="tag">Arabic (Native)</span>
                            <span className="tag">English (Fluent)</span>
                            <span className="tag">French (Fluent)</span>
                        </div>
                    </div>
                </div>
                <div className="about-stats glass-panel">
                    <div className="stat">
                        <span className="stat-num">3+</span>
                        <span className="stat-text">Years of coding</span>
                    </div>
                    <div className="stat">
                        <span className="stat-num">5+</span>
                        <span className="stat-text">Completed Projects</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
