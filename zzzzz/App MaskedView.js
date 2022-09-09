import React from 'react'
import { Text } from 'react-native'
import MaskedView from './Components/MaskedView'


const App = () => {
  return (
    <>
      <MaskedView source={require("./assets/a1.png")} >
        <Text style={{ fontSize: 100, fontWeight:'bold' }}>dsrf</Text>
      </MaskedView>

      <MaskedView colors={['red', 'green', 'blue', '#aaf']} >
        <Text style={{ fontSize: 150, fontWeight:'bold' }}>dsrf</Text>
      </MaskedView>
    </>
  )
}






export default App
