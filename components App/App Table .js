import React from 'react';
import { Table } from './components/Html'



function App() {
  return (
      <Table 
       color={['#555','#656565','white']}
        header={['title', 'edit', 'delete','for']}
        body={
          [ 
            ['title1', 'edit1','delete1','for1' ],
            ['title2', 'edit2','delete2','for2' ],
            ['title3', 'edit3','delete3','for3' ],
        ]
        } />
  )
}



export default App;






