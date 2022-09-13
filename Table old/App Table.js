import React from 'react';
import { Table, Tbody, Thead, Tr, Tc, Th, Tb, Tbtn, Span } from './components/Html'

function App() {
  return (
    <Table >

      <Thead>
        <Th>عنوان</Th>
        <Th>ویرایش</Th>
        <Th>ویرایش</Th>
      </Thead>

      <Tbody>
        <Tr>
          <Tbtn>1</Tbtn>
          <Tb>1</Tb>
          <Tb>1</Tb>
        </Tr>

        <Tr>
          <Tb>11</Tb>
          <Tb>33</Tb>
          <Tb>33</Tb>
        </Tr>

        <Tr>
          <Tb>111</Tb>
          <Tb>222</Tb>
          <Tb>222</Tb>
        </Tr>
      </Tbody>

    </Table>
  )
}



export default App;