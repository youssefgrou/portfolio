import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        const onMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorDot) {
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
            }

            if (cursorOutline) {
                cursorOutline.animate(
                    {
                        left: `${posX}px`,
                        top: `${posY}px`,
                    },
                    { duration: 500, fill: 'forwards' }
                );
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        // Hover effects setup
        const addHoverEffects = () => {
            const interactiveElements = document.querySelectorAll('a, button, .project-card, .timeline-item');
            
            interactiveElements.forEach((el) => {
                // Ensure we don't attach multiple listeners by checking a dataset flag
                if (el.dataset.cursorAttached) return;
                el.dataset.cursorAttached = "true";

                el.addEventListener('mouseenter', () => {
                    if (cursorOutline) {
                        if (el.classList.contains('project-card')) {
                            cursorOutline.style.width = '80px';
                            cursorOutline.style.height = '80px';
                            cursorOutline.style.backgroundColor = 'rgba(123, 44, 191, 0.2)';
                            cursorOutline.style.mixBlendMode = 'difference';
                        } else {
                            cursorOutline.style.width = '60px';
                            cursorOutline.style.height = '60px';
                            cursorOutline.style.backgroundColor = 'rgba(123, 44, 191, 0.1)';
                        }
                    }
                });
                
                el.addEventListener('mouseleave', () => {
                    if (cursorOutline) {
                        cursorOutline.style.width = '40px';
                        cursorOutline.style.height = '40px';
                        cursorOutline.style.backgroundColor = 'transparent';
                        cursorOutline.style.mixBlendMode = 'difference';
                    }
                });
            });
        };

        // Run initially
        addHoverEffects();

        // Optional: Run occasionally or use MutationObserver if DOM changes frequently
        // For simplicity, we just observe body changes to re-attach if needed
        const observer = new MutationObserver(() => {
            addHoverEffects();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={cursorDotRef}></div>
            <div className="cursor-outline" ref={cursorOutlineRef}></div>
        </>
    );
};

export default CustomCursor;
