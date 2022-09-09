import React from 'react';
import { SafeAreaView, Text, I18nManager,View } from 'react-native';
import Card from './Components/Card'

I18nManager.forceRTL(true)
I18nManager.allowRTL(false)


function App() {

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white',marginTop:80}} >
     <Card
        header={'salam salam'}
        body={'salam salam'}
        footer={<View style={{width:'100%', minWidth:'100%',alignItems:'center'}} ><Text>salam salam salam</Text></View>}
        img={require('./assets/a1.png')}
     />
  
    </SafeAreaView>
  )
}



export default App;