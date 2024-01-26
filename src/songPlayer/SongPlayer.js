import React from 'react';
import SongList from '../songList/SongList';
import "./songPlayer.css"


const SongPlayer = () => {
  // Fetch or set your to-do list
  const songs = [
    { id: 1, songName: 'Halo' , artistName: 'Blackbird  Blackbird', trackNumber: 1},
    { id: 2, songName: 'Blind' , artistName: 'Blackbird Blackbird', trackNumber: 2},
    { id: 3, songName: 'Twin Flames' , artistName: 'Blackbird Blackbird', trackNumber: 3},
    { id: 4, songName: 'Left to Hurt' , artistName: 'Blackbird Blackbird', trackNumber: 4},
    { id: 5, songName: 'Starlight' , artistName: 'Blackbird Blackbird', trackNumber: 5},
    { id: 6, songName: 'Modern Disbelief' , artistName: 'Blackbird Blackbird', trackNumber: 6},
  ];
  

  return (
 
    <div>
        <SongList songs={songs} /> 
    </div>
        
  );
};

export default SongPlayer;