import React, { useState, useRef } from 'react';
import './MusicPlayer.css';
import { FaPause } from "react-icons/fa6";
import { FaPlay } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const musicList = [
    'music/track1.mp3',
    'music/track2.mp3',
    'music/track3.mp3',
    'music/track1.mp3',
    'music/track2.mp3',
    'music/track3.mp3',
  ];


  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={musicList[0]} />
      <div className="controls">
        <button onClick={playPauseHandler}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;