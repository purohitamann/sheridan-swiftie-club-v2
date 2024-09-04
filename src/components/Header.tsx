import React, { useEffect, useRef } from 'react';
import LinkComponent from './LinkComponent/LinkComponent';
import Confetti from 'react-confetti'

import { useState } from 'react';
const Header: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    let width = 1000;
    let height = 1000;
    const customColors = ['#000000', '#FFFFFF', '#808080', '#E4E2DD'];
    const [isConfettiVisible, setConfettiVisible] = useState(false);
    const playAudio = () => {
        if (audioRef.current) {
            setConfettiVisible(true);
            audioRef.current.volume = 0.5;
            audioRef.current.play();
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            audioRef.current = new Audio('/so-high-school-intro.mp3');

            playAudio();
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center text-center w-[100vw] min-h-screen pt-10 ">
            <div>
                <h1
                    style={{ fontFamily: "Cinzel", color: "#E4E2DD" }}
                    className="text-6xl font-light md:text-xl pb-2"
                    onMouseEnter={playAudio}
                    onClick={playAudio}
                >
                    Sheridan Swiftie Club
                </h1>
                {isConfettiVisible &&
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        numberOfPieces={200}
                        recycle={true}
                        gravity={0.05}  // Slightly faster falling for fun

                        opacity={0.8}  // Slight transparency for elegance
                        drawShape={ctx => {
                            const shapes = ['heart', 'cross', 'knife'];
                            const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
                            const size = Math.random() * 30 + 10;  // Random size for variety

                            // Define the colors within the black, white, and grey theme
                            const colors = ['#000000', '#FFFFFF', '#808080'];  // Black, white, and grey

                            const fillColor = colors[Math.floor(Math.random() * colors.length)];

                            switch (randomShape) {
                                case 'heart':
                                    // Draw heart
                                    ctx.fillStyle = fillColor;
                                    ctx.beginPath();
                                    ctx.moveTo(size / 2, size / 4);
                                    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, size / 4); // Left curve
                                    ctx.bezierCurveTo(0, size / 2, size / 2, size, size / 2, size); // Left bottom
                                    ctx.bezierCurveTo(size / 2, size, size, size / 2, size, size / 4); // Right bottom
                                    ctx.bezierCurveTo(size, 0, size / 2, 0, size / 2, size / 4); // Right curve
                                    ctx.closePath();
                                    ctx.fill();
                                    break;

                                case 'cross':
                                    // Draw cross
                                    ctx.fillStyle = fillColor;
                                    const crossThickness = size / 5;
                                    ctx.fillRect(size / 2 - crossThickness / 2, 0, crossThickness, size); // Vertical bar
                                    ctx.fillRect(0, size / 2 - crossThickness / 2, size, crossThickness); // Horizontal bar
                                    break;

                                case 'knife':
                                    // Draw knife (a simple blade with a handle)
                                    ctx.fillStyle = fillColor;
                                    ctx.beginPath();
                                    ctx.moveTo(0, size / 2);
                                    ctx.lineTo(size / 2, size / 4);  // Tip of the blade
                                    ctx.lineTo(size, size / 2);  // Edge of the blade
                                    ctx.lineTo(size / 1.5, size);  // Handle
                                    ctx.closePath();
                                    ctx.fill();
                                    break;

                                default:
                                    break;
                            }
                        }}
                    />




                }
            </div>
            <div
                style={{ fontFamily: "Cinzel", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                className="flex flex-col justify-center items-center text-[#E4E2DD] text-lg gap-2 uppercase h-[40vh] mt-8  p-10 text-wrap w-[90vw] md:w-[40vw] lg:w-[30vw] rounded-md"
            >
                <p>The official website for Sheridan Swiftie Club</p>
                <p>We’re your go-to at Sheridan for all things Taylor Swift! If you’d like to learn more about the club, head to Clubs Corner and search for us!</p>
            </div>
            <div className="flex-col text-center w-[100vw] pt-10">
                <LinkComponent />
            </div>
            <footer className="mt-auto">
                <div style={{ fontFamily: "Cinzel" }} className="flex flex-col justify-center items-center w-[90vw] p-8 text-center text-[#E4E2DD]">
                    <p className="text-sm p-2">Disclaimer: We&#39;re not affiliated with Taylor Nation</p>
                    <p className="text-sm p-1">Designed and developed by Sheridan Swiftie Club</p>
                    <p className="text-sm p-1">© 2024 Sheridan Swiftie Club</p>
                </div>
            </footer>
        </div>
    );
};

export default Header;
