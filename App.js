import React from 'react';
import Button from './Components/Button';
import { Row } from './Components/Html';

const App = () => {


  return (
    <Row style={{margin:55}}>
    <Button
    bgcolor={'red'}
    color={'silver'}
    border={[,'green']}
    fontSize={17}
    padding={1}
    paddingTop={1}
    paddingBottom={1}
    paddingLeft={1}
    paddingRight={1}
     >
      onClick
      </Button>

    </Row>
  )
}
export default App