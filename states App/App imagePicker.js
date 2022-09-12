import React from 'react';
import { Br, Button } from './components/Html';
import { imagePicker, cameraPicker } from './states/imagePicer'


function App() {


  return (
    <>
      <Button onClick={() => {
        imagePicker('mixed')
          .then((res) => {
            console.log(res)
            // axios.post({image})
          })
      }}>
        imagePicker
      </Button>
      <Br />
      <Button onClick={() => {
        cameraPicker('video')
          .then((res) => {
            console.log(res)
            // axios.post({image})
          })
      }}>
        cameraPicker
      </Button>

    </>
  );
}

export default App;

