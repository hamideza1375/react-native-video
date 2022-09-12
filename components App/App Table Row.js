import React from 'react';
import { Tc, Th, Tb, Tbtn, TableRow, TheadRow } from './components/Html'

function App() {
  return (
    <TableRow style={{ height: '30%' }} >

      <TheadRow >
        <Th>عنوان</Th>
        <Th>ویرایش</Th>
        <Th>حذف</Th>
      </TheadRow>

      <Tc>
        <Tbtn>1عنوان</Tbtn>
        <Tb>1ویرایش</Tb>
        <Tb>1حذف</Tb>
      </Tc>

      <Tc>
        <Tb>2عنوان</Tb>
        <Tb>2ویرایش</Tb>
        <Tb>2حذف</Tb>
      </Tc>

      <Tc>
        <Tb>3عنوان</Tb>
        <Tb>3ویرایش</Tb>
        <Tb>3حذف</Tb>
      </Tc>

    </TableRow>
  )
}



export default App;