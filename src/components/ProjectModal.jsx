import { useState, useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageOpacity, setImageOpacity] = useState(1);

    // Handle keydown
    useEffect(() => {
        if (!project) return;
        
        const nextImage = () => {
            setImageOpacity(0);
            setTimeout(() => {
                setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
                setImageOpacity(1);
            }, 150);
        };

        const prevImage = () => {
            setImageOpacity(0);
            setTimeout(() => {
                setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
                setImageOpacity(1);
            }, 150);
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowRight') nextImage();
            else if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [project, onClose]);

    if (!project) return null;

    const nextImageClick = (e) => {
        if (e) e.stopPropagation();
        setImageOpacity(0);
        setTimeout(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
            setImageOpacity(1);
        }, 150);
    };

    const prevImageClick = (e) => {
        if (e) e.stopPropagation();
        setImageOpacity(0);
        setTimeout(() => {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
            setImageOpacity(1);
        }, 150);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-gallery')) {
            onClose();
        }
    };

    return (
        <div className={`modal-overlay ${project ? 'active' : ''}`} onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-gallery">
                    <img
                        className="modal-image"
                        src={'/' + project.images[currentImageIndex]}
                        alt={project.title}
                        style={{ opacity: imageOpacity }}
                    />
                    <div className="modal-controls">
                        <button className="modal-btn" onClick={prevImageClick}>&larr;</button>
                        <button className="modal-btn" onClick={nextImageClick}>&rarr;</button>
                    </div>
                    <div className="modal-counter">
                        {currentImageIndex + 1} / {project.images.length}
                    </div>
                </div>
                <div className="modal-info">
                    <h3 className="modal-title">{project.title}</h3>
                    <p className="modal-description">{project.description}</p>
                    <div className="project-tech justify-center">
                        {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
