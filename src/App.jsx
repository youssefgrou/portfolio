import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const staggerElements = document.querySelectorAll('.reveal-stagger');

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const revealPoint = 100;

            revealElements.forEach(el => {
                const revealTop = el.getBoundingClientRect().top;
                if (revealTop < windowHeight - revealPoint) el.classList.add('active');
            });

            staggerElements.forEach(el => {
                const revealTop = el.getBoundingClientRect().top;
                if (revealTop < windowHeight - revealPoint) {
                    el.classList.add('active');
                    Array.from(el.children).forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.15}s`;
                    });
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on mount
        revealOnScroll();

        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    return (
        <>
            <CustomCursor />
            <div className="bg-glow"></div>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
