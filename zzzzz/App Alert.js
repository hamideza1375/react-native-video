import React from 'react';
import { Div, H1 } from './Components/Html'
import Alert from './Components/Alert'

function App() {
  return (
    <Div >
      <H1 onClick={() => {
        Alert.alert(
          "Alert Title",
          "My Alert Msg",
          [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        )
      }} >hbhbvhbhb</H1>
    </Div>
  )
}



export default App;