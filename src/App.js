import React, { useState } from 'react';
import SongList from './components/SongList';

function App() {
  // const [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);

  return (
    <div>
      <SongList />
       {/* <p>You clicked {count} </p>
       <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
    
  );
}

export default App;
