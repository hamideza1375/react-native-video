import React from 'react';
import { SafeAreaView, View, Text, I18nManager } from 'react-native';
import List from './Components/List'
import Button from './Components/Button'


function App() {

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white',marginTop:80}} >
      <List icon='download' icon2='youtube' header="سلام" body="سلام" />
      <List icon='download' icon2='address-card' header="سلام" body="سلام" />
      <List icon='download' icon2='envelope' header="سلام" body="سلام" />
      <List icon='download' icon2='phone' header="سلام" body="سلام"  />
      <Button icon='download' icon2='phone' header="سلام" body="سلام" >clicl</Button>
    </SafeAreaView>
  )
}



export default App;