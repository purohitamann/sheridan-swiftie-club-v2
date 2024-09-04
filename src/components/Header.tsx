import React, { useEffect, useRef } from 'react';
import LinkComponent from './LinkComponent/LinkComponent';

const Header: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playAudio = () => {
        if (audioRef.current) {
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
