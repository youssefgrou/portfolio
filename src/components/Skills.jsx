

const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <div className="section-header reveal">
                <h2>Technical <span>Skills</span></h2>
            </div>
            <div className="skills-grid reveal">
                <div className="skill-category glass-panel">
                    <h3>Frontend</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">React.js</span>
                        <span className="skill-tag">JavaScript (ES6+)</span>
                        <span className="skill-tag">HTML5 / CSS3</span>
                        <span className="skill-tag">Bootstrap</span>
                    </div>
                </div>
                <div className="skill-category glass-panel">
                    <h3>Backend</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">PHP / Laravel</span>
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">Python</span>
                    </div>
                </div>
                <div className="skill-category glass-panel">
                    <h3>Database & Tools</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">MySQL</span>
                        <span className="skill-tag">Git / Version Control</span>
                        <span className="skill-tag">Office365</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
