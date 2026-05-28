

const Experience = () => {
    return (
        <section id="experience" className="timeline-section section">
            <div className="section-header reveal">
                <h2>Experience & <span>Education</span></h2>
            </div>
            
            <div className="timeline-container reveal">
                <div className="timeline-column">
                    <h3 className="timeline-title">Experience</h3>
                    <div className="timeline">
                        <div className="timeline-item glass-panel">
                            <div className="timeline-date">Jun 2025 - Present</div>
                            <h4 className="timeline-role">Administrative Agent - GRH PRO (Rabat)</h4>
                            <p>Stock management, supplier orders, purchasing follow-up for CIAT, and communication with suppliers to update stock movements.</p>
                        </div>
                        <div className="timeline-item glass-panel">
                            <div className="timeline-date">Jun 2024</div>
                            <h4 className="timeline-role">Web Developer - GB Digital (Meknès)</h4>
                            <p>Designed and developed backend with Laravel and frontend with ReactJS. Integrated core e-commerce features: registration, cart, payment, admin panel.</p>
                        </div>
                        <div className="timeline-item glass-panel">
                            <div className="timeline-date">Mar 2023 - May 2023</div>
                            <h4 className="timeline-role">Web Developer - AUI (Azrou)</h4>
                            <p>Created a web application for library management using PHP, HTML, JS, and Bootstrap. Designed a MySQL database for real-time book storage and management.</p>
                        </div>
                    </div>
                </div>

                <div className="timeline-column">
                    <h3 className="timeline-title">Education</h3>
                    <div className="timeline">
                        <div className="timeline-item glass-panel">
                            <div className="timeline-date">2023 - 2024</div>
                            <h4 className="timeline-role">IT & Web Development Certificate</h4>
                            <p>Al Akhawayn Centre D'Azrou pour le Développement Communautaire</p>
                        </div>
                        <div className="timeline-item glass-panel">
                            <div className="timeline-date">2021 - 2023</div>
                            <h4 className="timeline-role">Specialized Technician in IT Development</h4>
                            <p>Ecole Supérieure d'Informatique Appliquée et de Marketing, Azrou</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
