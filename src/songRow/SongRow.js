import React from 'react';
import './songRow.css'
import { IoIosHeart, IoMdShareAlt, IoMdArrowDropdown } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import { CgMenuGridO } from "react-icons/cg";
import MusicPlayer from '../musicPlayer/MusicPlayer';



const SongRow = ({ songs }) => {

    const hadleMusicPlay = (id) => {
        console.log("play");
        console.log(id)
    
    }
    
  return (<>
    <tbody>
        {songs.map((song) => (
                <tr className='tableDataRow' key={song.id}>
                    <td className='tableData'>
                        <CgMenuGridO className='tableRowIconStyle' />
                        <MusicPlayer id = {song.id} onClick={()=> hadleMusicPlay(song.id)} />
                    </td>
                    <td className='tableData'>{song.songName}</td>
                    <td className='tableData'>{song.artistName}</td>
                    <td className='tableData'>{song.trackNumber}</td>
                    <td className='tableData'>
                        <IoIosHeart className='tableRowIconStyle' />
                        <MdDone className='tableRowIconStyle' />
                        <IoMdShareAlt className='tableRowIconStyle' />
                        <IoMdArrowDropdown className='tableRowIconStyle' />
                    </td>
                </tr>
        ))}
    </tbody>
    </>);
};

export default SongRow;