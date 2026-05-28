// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Custom Cursor ---
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Slight delay for the outline for a trailing effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover effects for the custom cursor on links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .timeline-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(123, 44, 191, 0.1)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    // --- Scroll Reveal Animation & Magnetic Buttons ---
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
    revealOnScroll();

    // Magnetic Buttons Logic
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Dynamic Projects Gallery ---
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

    const projectsContainer = document.getElementById('projects-container');

    if (projectsContainer) {
        projectsData.forEach((project, index) => {
            const techSpans = project.tech.map(t => `<span>${t}</span>`).join('');
            const cardHTML = `
                <div class="project-card" data-index="${index}">
                    <div class="project-image-container">
                        <img src="${project.cover}" alt="${project.title}" class="project-cover">
                    </div>
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tech">
                            ${techSpans}
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });

        // --- Projects Slider Logic ---
        const sliderPrev = document.getElementById('slider-prev');
        const sliderNext = document.getElementById('slider-next');

        if (sliderPrev && sliderNext) {
            sliderPrev.addEventListener('click', () => {
                const card = projectsContainer.querySelector('.project-card');
                if(card) {
                    const cardWidth = card.offsetWidth;
                    const gap = parseFloat(getComputedStyle(projectsContainer).gap) || 32;
                    projectsContainer.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
                }
            });

            sliderNext.addEventListener('click', () => {
                const card = projectsContainer.querySelector('.project-card');
                if(card) {
                    const cardWidth = card.offsetWidth;
                    const gap = parseFloat(getComputedStyle(projectsContainer).gap) || 32;
                    projectsContainer.scrollBy({ left: (cardWidth + gap), behavior: 'smooth' });
                }
            });
        }
    }

    // --- Modal Logic ---
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    const modalCounter = document.getElementById('modal-counter');

    let currentProjectIndex = -1;
    let currentImageIndex = 0;

    const updateModalContent = () => {
        if (currentProjectIndex === -1) return;
        const project = projectsData[currentProjectIndex];
        const images = project.images;
        
        modalImage.style.opacity = '0';
        setTimeout(() => {
            modalImage.src = images[currentImageIndex];
            modalImage.style.opacity = '1';
        }, 150);

        modalCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalTech.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
    };

    const openModal = (projectIndex) => {
        currentProjectIndex = projectIndex;
        currentImageIndex = 0;
        updateModalContent();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        currentProjectIndex = -1;
    };

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        if (currentProjectIndex === -1) return;
        const project = projectsData[currentProjectIndex];
        currentImageIndex = (currentImageIndex + 1) % project.images.length;
        updateModalContent();
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        if (currentProjectIndex === -1) return;
        const project = projectsData[currentProjectIndex];
        currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
        updateModalContent();
    };

    // Event Listeners for Project Cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.getAttribute('data-index'));
            openModal(index);
        });

        // Add custom cursor styling for project cards
        card.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '80px';
            cursorOutline.style.height = '80px';
            cursorOutline.style.backgroundColor = 'rgba(123, 44, 191, 0.2)';
            cursorOutline.style.mixBlendMode = 'difference';
        });
        
        card.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
            cursorOutline.style.mixBlendMode = 'normal';
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalNext) modalNext.addEventListener('click', nextImage);
    if (modalPrev) modalPrev.addEventListener('click', prevImage);
    
    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-gallery')) {
                closeModal();
            }
        });
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeModal();
        else if (e.key === 'ArrowRight') nextImage();
        else if (e.key === 'ArrowLeft') prevImage();
    });
});
