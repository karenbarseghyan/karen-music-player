import React, { useState, useRef } from 'react';
import './MusicPlayer.css';
import { FaPause } from "react-icons/fa6";
import { FaPlay } from 'react-icons/fa';

const MusicPlayer = ({id = 0, onClickPlay}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const musicList = [
    'music/track1.mp3',
    'music/track2.mp3',
    'music/track3.mp3',
    'music/track4.mp3',
    'music/track5.mp3',
    'music/track6.mp3',
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
    <span className="music-player">
      <audio ref={audioRef} src={musicList[id]} />
      <span className="controls">
        <span onClick={playPauseHandler}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </span>
      </span>
    </span>
  );
};

export default MusicPlayer;