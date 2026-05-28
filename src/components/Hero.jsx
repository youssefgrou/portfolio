
import MagneticButton from './MagneticButton';

const Hero = () => {
    return (
        <>
            <section id="hero" className="hero section">
                <div className="hero-content reveal-stagger">
                    <p className="hero-greeting">Creative Developer</p>
                    <h1 className="hero-name">Youssef<br /><span className="text-stroke">Guerouat</span></h1>
                    <p className="hero-description">
                        Crafting immersive digital experiences with modern web technologies.<br />Based in Morocco.
                    </p>
                    <div className="hero-actions">
                        <MagneticButton href="#projects" className="btn-primary magnetic-btn">
                            View Selected Works
                        </MagneticButton>
                        <MagneticButton href="#contact" className="btn-secondary magnetic-btn">
                            Let's Talk
                        </MagneticButton>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="orb"></div>
                    <div className="orb orb-2"></div>
                </div>
            </section>

            <div className="marquee-container">
                <div className="marquee-content">
                    <span>FULL-STACK DEVELOPER &bull; CREATIVE DESIGNER &bull; AI ENTHUSIAST &bull; </span>
                    <span>FULL-STACK DEVELOPER &bull; CREATIVE DESIGNER &bull; AI ENTHUSIAST &bull; </span>
                    <span>FULL-STACK DEVELOPER &bull; CREATIVE DESIGNER &bull; AI ENTHUSIAST &bull; </span>
                    <span>FULL-STACK DEVELOPER &bull; CREATIVE DESIGNER &bull; AI ENTHUSIAST &bull; </span>
                </div>
            </div>
        </>
    );
};

export default Hero;
