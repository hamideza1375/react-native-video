import React from 'react';
import Button from './Components/Button';
import { download } from './Components/Download'

function App() {
  return (
    <>
      <Button onPress={() => {download('https://www.w3schools.com/html/mov_bbb.mp4')}} >bownload</Button>
    </>
  )
}


export default App;
