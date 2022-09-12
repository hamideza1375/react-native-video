import React from 'react';
import { View, SafeAreaView, I18nManager } from 'react-native';
import Input from './components/Input';


I18nManager.forceRTL(true)
I18nManager.allowRTL(false)



function App() {

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Input placeholder="fullname" icon={'youtube'} iconSize={20} 
      color='silver' iconColor='silver'
        style={{ backgroundColor: 'white', height: 40, width: 200 }} />
    </SafeAreaView>
  )
}



export default App;