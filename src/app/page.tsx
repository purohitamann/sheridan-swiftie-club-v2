'use client';
import React, { useEffect } from 'react';
import PlayButton from '../components/PlayButton'; // Adjust the path according to your folder structure
import Header from '../components/Header'; // Import the new ClubName component
import Link from 'next/link';
import LinkComponent from '../components/LinkComponent/LinkComponent';

const Home: React.FC = () => {
  useEffect(() => {

    const audio = new Audio('/so-high-school-intro.mp3');
    audio.volume = 0.5;
    audio.play();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

    </main>
  );
};

export default Home;
