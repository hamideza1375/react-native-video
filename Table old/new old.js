import React from 'react';
import { Table, Tr, Th, Tb, Thead } from './components/Html'

function App() {

  return (
    <Table style={{height:'50%'}} >

      <Thead>
        <Th>عنوان</Th>
        <Th>22ویرایش</Th>
        <Th>ویرایش</Th>
      </Thead>

      <Tr>
        <Tb>عنوان</Tb>
        <Tb>2ویرایش</Tb>
        <Tb>ویرایش</Tb>
      </Tr>
      <Tr>
        <Tb>عنوان</Tb>
        <Tb>2ویرایش</Tb>
        <Tb>ویرایش</Tb>
      </Tr>
      <Tr>
        <Tb>عنوان</Tb>
        <Tb>2ویرایش</Tb>
        <Tb>ویرایش</Tb>
      </Tr>
    </Table>
  )
}



export default App;