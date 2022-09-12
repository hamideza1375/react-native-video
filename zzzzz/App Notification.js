import React from 'react';
import { Text, Pressable } from 'react-native';
import Notification from './Components/notification';

function App() {
  const { create, close } = Notification();

  return (
    <>
      <Pressable
        onPress={() => { create('dddd', 'ddddererr',require("./assets/a1.png")) }} >
        <Text style={{ fontSize: 16, alignSelf: 'center', marginTop: 22 }} >create</Text>
      </Pressable>

      <Pressable
        onPress={() => { close('del') }} >
        <Text style={{ fontSize: 16, alignSelf: 'center', marginTop: 22 }} >close</Text>
      </Pressable>
    </>
  )
}
export default App;

