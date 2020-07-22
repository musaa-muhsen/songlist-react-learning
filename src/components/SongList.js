import React, {useState, useEffect} from 'react';
import {v4} from 'uuid';
import NewSongForm from './NewSongForm';



const SongList = () => {
   // initial value //setSongs changes the data for the second array 
   const musicList = useState([
     { title: 'almost home', id: 1 },
     { title: 'memory gospel', id: 2 },
     { title: 'this wild darkness', id: 3 }     
    ]);
    
    const currentStateSongs = musicList[0];
    const changeStateSongs = musicList[1];
    const [age, setAge] = useState(10);
    
    useEffect(() => {
        // const color1 = document.querySelector('.song-list').style.backgroundColor = '#008000';
        // const color2 = document.querySelector('.song-list').style.backgroundColor = '#00FFFF';
        

    }, [currentStateSongs]);

    useEffect(()=> {
        console.log(age)
    }, [age])
    
   // console.log(currentStateSongs)

    const addSong = (title) => {
        changeStateSongs([...currentStateSongs, {title: title, id: v4()} ])
    }

    return ( 
        <div className="song-list">
            <ul style={{border: '1px solid black', width: '200px'}}>
            {currentStateSongs.map((song) => {
return (<li style={{listStyle: "none",color: 'blue'}} key={song.id}>{`${song.title}`}</li>) 
            })} 
            </ul>
            
            <NewSongForm addSongProp={addSong} helloProp={"hello"} />
            <button onClick={() => setAge(age + 1)}>Age going up {age}</button>
        </div>
     );
}
 
export default SongList;