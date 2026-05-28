

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="section-header reveal text-center">
                <h2>Let's <span>Talk</span></h2>
                <p className="contact-subtitle">Have a project in mind? Let's build something amazing together.</p>
            </div>
            <div className="contact-grid reveal-stagger">
                <a href="mailto:grouateyoussef0@gmail.com" className="contact-card">
                    <div className="contact-icon">📧</div>
                    <h3>Email</h3>
                    <p>grouateyoussef0@gmail.com</p>
                </a>
                <a href="tel:+212678420419" className="contact-card">
                    <div className="contact-icon">📱</div>
                    <h3>Phone</h3>
                    <p>+212 678 420 419</p>
                </a>
                <div className="contact-card">
                    <div className="contact-icon">📍</div>
                    <h3>Location</h3>
                    <p>Morocco, Ifrane, Azrou</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
