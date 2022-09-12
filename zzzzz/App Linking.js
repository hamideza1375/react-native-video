import React from 'react';
import { Div, H1 } from './Components/Html'
import { Linking } from './Components/Linking';

function App() {

  return (
    <Div style={{ width: 500, height: 500, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}
      onClick={async () => await Linking('https://github.com')}>
      <H1>click</H1>
    </Div>
  )
}

export default App;