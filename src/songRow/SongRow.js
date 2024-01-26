import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoIosHeart, IoMdShareAlt, IoMdArrowDropdown } from 'react-icons/io';
import { MdDone } from 'react-icons/md';
import { CgMenuGridO } from "react-icons/cg";




const SongRow = ({ songs }) => {
  return (<>
    <tbody>
        {songs.map((song) => (
                <tr className='tableDataRow' key={song.id}>
                    <td className='tableData'>
                        <CgMenuGridO className='tableRowIconStyle' />
                        <FaPlay className='tableRowIconStyle'/>
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