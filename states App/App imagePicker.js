import React, { useState } from 'react';
import Button from './components/Button';
import { imagePicker, cameraPicker } from './states/imagePicer'


function App() {
  
  const [image, setimage] = useState({})

  return (
    <>
      <Button onClick={() => {
        imagePicker('photo', setimage)
        //! axios.post({image})
      }}>click</Button>

    </>
  );
}

export default App;

