import React from 'react';
import { Button } from './Html';


function _Button(prop) {
  const { color, style, outline, bgcolor, children, border = [], fontSize = 17, padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingVertical, paddingHorizontal, height=46, width, margin, marginTop, marginBottom, marginLeft, marginRight, marginVertical, marginHorizontal } = prop

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
          },
          !color && (bgcolor == 'white' ? { color: '#555' } : { color: 'white' }) ||
          { color: color }, bgcolor == 'white' ? {} :
            {
              borderColor: !border[1] && ((!bgcolor) ? '#0091EA' :
                bgcolor == 'yellow' ? '#ca0' : bgcolor) || border[1]
            }, {
              borderWidth: border[0] ? border[0] : 1,
              height, width, margin, marginTop, marginBottom, marginLeft, marginRight, marginVertical, marginHorizontal,},style]}
      
              textStyle={[
          !color && (bgcolor == 'white' ?
            { color: '#555' } :
            { color: 'white' }) ||
          { color: color },
          {paddingHorizontal, paddingVertical, fontSize, padding, paddingTop, paddingBottom, paddingLeft, paddingRight,}]}>
      </Button>
      :
      <Button
      {...prop}
        style={[
          , bgcolor == 'white' ? {} :
            {borderColor: !border[1] && (bgcolor == 'yellow' && '#fc3' || bgcolor || '#3399ff') || border[1]},
             {borderWidth: border[0] ? border[0] : 1,
              height, width, margin, marginTop, marginBottom, marginLeft, marginRight, marginVertical, marginHorizontal,},
              style]}

        textStyle={[color &&
          { color: color } ||
          !color && bgcolor &&
          { color: bgcolor } ||
          { color: '#3399ff' },
        {paddingHorizontal, paddingVertical, fontSize, padding, paddingTop, paddingBottom, paddingLeft, paddingRight}]}>
        {children}
      </Button>
  )
}

export default _Button;
