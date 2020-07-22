import React, {useState} from 'react'; //imr

const NewSongForm = (props) => {

   const addSong = props.addSongProp;
   const hello = props.helloProp
   //console.log(addSong);
   //console.log(hello)

   const [title, setTitle] = useState('');

   const formHandler = (e) => {
       addSong(title);
       e.preventDefault();
       setTitle('');

   }

    return (  
<form onSubmit={formHandler}>
    <label>Song name:</label>
    <input type="text" value={title} required onChange={e => setTitle(e.target.value)}/>
    <input type="submit" value="add song" />
</form>
    );

}
 
export default NewSongForm;

