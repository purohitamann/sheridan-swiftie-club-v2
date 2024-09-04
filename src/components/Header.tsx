import React, { useEffect } from 'react';
import LinkComponent from './LinkComponent/LinkComponent';

const Header: React.FC = () => {
    let audio: HTMLAudioElement | null = null;

    const playAudio = () => {
        if (audio) {
            audio.volume = 0.5;
            audio.play();
        }
    };

    useEffect(() => {

        if (typeof window !== 'undefined') {
            audio = new Audio('/so-high-school-intro.mp3');

            playAudio();
        }
    }, []);

    return (
        <div className="flex-col justify-center align-items-center text-center">
            <div>
                <h1
                    style={{ fontFamily: "Cinzel", color: "#E4E2DD" }}
                    className="text-6xl font-light w-[60vw]  text-[#E4E2DD] md:text-xl pb-2 bg-slate-100"
                    onMouseEnter={playAudio}
                    onClick={playAudio}

                >
                    Sheridan Swiftie Club
                </h1>
                <div style={{ fontFamily: "Cinzel" }} className=' flex-col justify-center align-items-center text-[#E4E2DD] text-sm gap-2  uppercase  p-10'>
                    <p>The official website for Sheridan Swiftie Club</p>
                    <p>We’re your go-to at Sheridan for all things Taylor Swift! If you’d like to learn more about the club, head to Clubs Corner and search for us!</p>
                </div>
            </div>

            <div >
                <LinkComponent />
            </div>

        </div>

    );
};

export default Header;
