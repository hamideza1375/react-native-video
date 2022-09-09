import React from 'react';
import { Button } from './Html';


function _Button(prop) {
  const { outline, bgcolor, color, children, border=[], style, fontSize = 17, padding, paddingTop, paddingBottom, paddingLeft, paddingRight } = prop

  return (
    !outline ?
      <Button
        {...prop}
        style={[
          {
            backgroundColor: (bgcolor == 'red') && '#f33' ||
              (!bgcolor) && '#0099ff' ||
              (bgcolor == 'blue') && '#22f' ||
              (bgcolor == 'green') && '#292' ||
              (bgcolor == 'yellow') && '#fa0' ||
              (bgcolor == 'black') && '#555' ||
              bgcolor
            ,
          },
          !color && (bgcolor == 'white' ? { color: '#555' } : { color: 'white' }) ||
          { color: color }, bgcolor == 'white' ? {  } :
            {
              borderColor: !border[1] && ((!bgcolor) ? '#0091EA' :
                bgcolor == 'yellow' ? '#ca0' : bgcolor) || border[1]
            }, {
            margin: prop.margin, marginHorizontal: prop.marginHorizontal,
            marginVertical: prop.marginVertical,borderWidth:border[0]?border[0]: 1 
          },
          style]}
        textStyle={[
          !color && (bgcolor == 'white' ?
            { color: '#555' } :
            { color: 'white' }) ||
          { color: color },
          {
            padding: prop.padding, paddingHorizontal:prop.paddingHorizontal,
            paddingVertical: prop.paddingVertical
          }, { fontSize, padding, paddingTop, paddingBottom, paddingLeft, paddingRight }]}
      >
      </Button>
      :
      <Button
        style={[
          , bgcolor == 'white' ? { } :
            {
              borderColor: !border[1] && (bgcolor == 'yellow' && '#fc3' || bgcolor || '#3399ff')
                || border[1]
            }, {
            margin: prop.margin, marginHorizontal: prop.marginHorizontal,
            marginVertical: prop.marginVertical
          }, style,
          style]}
        textStyle={[color &&
          { color: color } ||
          !color && bgcolor &&
          { color: bgcolor } ||
          { color: '#3399ff' }, {
          padding: prop.padding, paddingHorizontal: prop.paddingHorizontal,
          paddingVertical: prop.paddingVertical
        }, { fontSize, padding, paddingTop, paddingBottom, paddingLeft, paddingRight,borderWidth:border[0]?border[0]: 1  }]} >
        {children}
      </Button>
  )
}

export default _Button;
