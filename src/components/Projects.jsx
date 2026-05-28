import { useRef, useState } from 'react';
import ProjectModal from './ProjectModal';

const projectsData = [
    {
        id: "espace-de-vente",
        title: "Espace de Vente",
        description: "Sales workspace and comprehensive point of sale platform.",
        tech: ["Web Development", "UI/UX"],
        cover: "project/espace de vente/1.png",
        images: [
            "project/espace de vente/1.png", 
            "project/espace de vente/2.png", 
            "project/espace de vente/3.png", 
            "project/espace de vente/4.png"
        ]
    },
    {
        id: "gestion-de-sinistre",
        title: "Gestion de Sinistre",
        description: "Insurance claim and incident management dashboard.",
        tech: ["Dashboard", "Management"],
        cover: "project/gestion de sinistre/home.png",
        images: [
            "project/gestion de sinistre/home.png", 
            "project/gestion de sinistre/dash.png", 
            "project/gestion de sinistre/list sinistre.png", 
            "project/gestion de sinistre/details.png", 
            "project/gestion de sinistre/detail de sinistre.png", 
            "project/gestion de sinistre/generate pdf.png"
        ]
    },
    {
        id: "magasinier",
        title: "Magasinier App",
        description: "Stock management and inventory tracking system.",
        tech: ["Inventory", "Web App"],
        cover: "project/MAGASINIER/1.png",
        images: [
            "project/MAGASINIER/1.png", 
            "project/MAGASINIER/2.png"
        ]
    },
    {
        id: "immobilier",
        title: "Immobilier",
        description: "Real estate property listing and management platform.",
        tech: ["Real Estate", "Platform"],
        cover: "project/immobilier/1.png",
        images: [
            "project/immobilier/1.png", 
            "project/immobilier/2.png"
        ]
    },
    {
        id: "rentalcars",
        title: "Rental Cars",
        description: "Car rental booking and vehicle management system.",
        tech: ["Booking", "System"],
        cover: "project/rentalcars/1.png",
        images: [
            "project/rentalcars/1.png", 
            "project/rentalcars/2.png"
        ]
    },
    {
        id: "download-playlist",
        title: "Download Playlist",
        description: "Application for downloading and managing media playlists.",
        tech: ["Media", "Utility"],
        cover: "project/download playlist/1.png",
        images: [
            "project/download playlist/1.png", 
            "project/download playlist/2.png"
        ]
    },
    {
        id: "learn-sql",
        title: "Learn SQL",
        description: "Interactive educational platform for learning SQL.",
        tech: ["Education", "SQL"],
        cover: "project/learn sql/1.png",
        images: [
            "project/learn sql/1.png", 
            "project/learn sql/2.png"
        ]
    }
];

const Projects = () => {
    const gridRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const scrollLeft = () => {
        if (gridRef.current) {
            const card = gridRef.current.querySelector('.project-card');
            if (card) {
                const cardWidth = card.offsetWidth;
                const gap = parseFloat(getComputedStyle(gridRef.current).gap) || 32;
                gridRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        if (gridRef.current) {
            const card = gridRef.current.querySelector('.project-card');
            if (card) {
                const cardWidth = card.offsetWidth;
                const gap = parseFloat(getComputedStyle(gridRef.current).gap) || 32;
                gridRef.current.scrollBy({ left: (cardWidth + gap), behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="projects" className="projects section">
            <div className="section-header reveal">
                <h2>Featured <span>Projects</span></h2>
            </div>
            <div className="projects-slider-wrapper reveal">
                <div ref={gridRef} className="projects-grid">
                    {projectsData.map((project) => (
                        <div 
                            key={project.id} 
                            className="project-card" 
                            onClick={() => {
                                setSelectedProject(project);
                                document.body.style.overflow = 'hidden';
                            }}
                        >
                            <div className="project-image-container">
                                <img src={'/' + project.cover} alt={project.title} className="project-cover" />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider-controls">
                    <button className="slider-btn" onClick={scrollLeft}>&larr;</button>
                    <button className="slider-btn" onClick={scrollRight}>&rarr;</button>
                </div>
            </div>

            <ProjectModal 
                key={selectedProject ? selectedProject.id : 'empty'}
                project={selectedProject} 
                onClose={() => {
                    setSelectedProject(null);
                    document.body.style.overflow = '';
                }} 
            />
        </section>
    );
};

export default Projects;
