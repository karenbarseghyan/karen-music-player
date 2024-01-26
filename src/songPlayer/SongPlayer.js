import React, { useState } from 'react';
import "./songPlayer.css"
// import SearchableSongList from '../searchableSongList/SearchableSongList';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { LuArrowDownUp } from "react-icons/lu";
import { IoIosSearch } from 'react-icons/io';
import SongList from '../songList/SongList';


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

  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songs.filter((song) =>
    song.songName.toLowerCase().includes(searchTerm.toLowerCase())
  );   

  
  return (
    <div className='musicPlayer'>
        <div className='playerHeader'>
            <div >
                <span className='playerHeaderButton'>
                    <button>
                        <FaPlay /> <strong>Play All</strong>        
                    </button>
                    <button>
                        <IoMdArrowDropdown />
                    </button>
                </span>
                    
                <span className='playerHeaderButton'>
                    <button>
                        <FaPlus /> <strong>Add All</strong> 
                    </button>
                    <button>
                        <IoMdArrowDropdown />
                    </button>
                </span>
            </div>
            
            <div>
                <span className='playerHeaderButton'>
                    <button>
                        <LuArrowDownUp />
                        <span>Track Number</span>
                        <IoMdArrowDropdown />
                    </button>
                </span>

                <span className='searchBar'>
                <IoIosSearch className='searchIcon' />
                    <input
                    className='searchBarInput'
                    type="text"
                    placeholder="Filter"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    /> 
                </span>
            </div>
            
        </div>
        <SongList songs={filteredSongs} /> 
    </div>
        
    
    
  );
};

export default SongPlayer;