import React, { useEffect, useRef } from 'react';
import './Confetti.css';
const Confetti: React.FC<{ trigger: boolean }> = ({ trigger }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (trigger) {
            generateConfetti();
        }
    }, [trigger]);

    const generateConfetti = () => {
        const container = containerRef.current;
        if (container) {
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';

                const positionX = Math.random() * window.innerWidth;
                const positionY = Math.random() * window.innerHeight;
                const rotation = Math.random() * 360;
                const scale = Math.random() * 1.5 + 0.5;
                const delay = Math.random() * 2;
                const duration = Math.random() * 3 + 2;
                const color = generateRandomColor();

                confetti.style.left = `${positionX}px`;
                confetti.style.top = `${positionY}px`;
                confetti.style.transform = `rotate(${rotation}deg) scale(${scale})`;
                confetti.style.backgroundColor = color;
                confetti.style.animationDelay = `${delay}s`;
                confetti.style.animationDuration = `${duration}s`;

                container.appendChild(confetti);

                setTimeout(() => {
                    if (container.contains(confetti)) {
                        container.removeChild(confetti);
                    }
                }, (delay + duration) * 1000);
            }
        }
    };

    const generateRandomColor = (): string => {
        // const letters = '0123456789ABCDEF';
        // let color = '#';
        // for (let i = 0; i < 6; i++) {
        //     color += letters[Math.floor(Math.random() * 16)];
        // }
        // return color;
        const colors = ['#000000', '#808080', '#FFFFFF']; // Black, Gray, White
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="confetti-container" ref={containerRef}></div>
    );
};

export default Confetti;
