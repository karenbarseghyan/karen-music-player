import React from 'react';
import SongRow from '../songRow/SongRow';
import './songList.css'

const SongList = ({ songs }) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th className='tableHeader'></th>
                <th className='tableHeader'>Song Name</th>
                <th className='tableHeader'>Artist Name</th>
                <th className='tableHeader'>Track</th>
                <th className='tableHeader'></th>
            </tr>
        </thead>           
        <SongRow key={songs.id} songs={songs} />
    </table>
  );
};

export default SongList;