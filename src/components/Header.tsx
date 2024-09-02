import React, { useEffect } from 'react';
import LinkComponent from './LinkComponent/LinkComponent';
import Confetti from './Confetti/Confetti';
import { useState } from 'react';
const Header: React.FC = () => {
    let audio: HTMLAudioElement | null = null;

    const playAudio = () => {
        handleClubNameClick();
        if (audio) {
            audio.volume = 0.5;
            audio.play();
        }
    };
    const [confettiTrigger, setConfettiTrigger] = useState<boolean>(false);

    const handleClubNameClick = () => {
        setConfettiTrigger(true);
        setTimeout(() => setConfettiTrigger(false), 100); // Reset after short delay to allow multiple triggers
    };

    useEffect(() => {

        if (typeof window !== 'undefined') {
            audio = new Audio('/Audio/SoHighSchoolInstrumental.mp3');
            audio.volume = 0.5;
            playAudio();
        }
    }, []);

    return (
        <header className="flex-col w-[70vw] justify-center align-center items-center">
            <div>
                <h1
                    style={{ fontFamily: "Cinzel", color: "#E4E2DD" }}
                    className="text-6xl font-light club-name"
                    onMouseEnter={playAudio}
                    onClick={playAudio}

                >
                    Sheridan Swiftie Club
                    <Confetti trigger={confettiTrigger} />
                </h1>

            </div>
            <div className="flex items-center justify-center mt-3"  >
                <LinkComponent />
            </div>

        </header>

    );
};

export default Header;
