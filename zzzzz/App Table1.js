import React from 'react';
import { Table, Tbody, Thead, Tr, Tc, Th, Tb, Tbtn, Span } from './Components/Html'

function App() {
  return (
    <Table >

      <Tr style={{flexGrow:1}}>
        <Th>عنوان</Th>
        <Th>ویرایش</Th>
        <Th>حذف</Th>
      </Tr>

      <Tr style={{flexGrow:3}} >
        <Tc>
          <Tbtn>1</Tbtn>
          <Tb>1</Tb>
          <Tb>1</Tb>
        </Tc>
        <Tc>
          <Tb>11</Tb>
          <Tb>22</Tb>
          <Tb>33</Tb>
        </Tc>
        <Tc>
          <Tb>111</Tb>
          <Tb>222</Tb>
          <Tb>333</Tb>
        </Tc>
      </Tr>
      
    </Table>
  )
}



export default App;