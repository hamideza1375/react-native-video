import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


let fontFamily = 'serif'
let fontSize = 16

// grand
// btitrbold
// byekan

const _Button = React.forwardRef((prop, ref) => <TouchableOpacity ref={ref} onPress={prop.onClick} {...prop} style={[{
  backgroundColor: '#ccc', paddingHorizontal: 17, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, textAlign: 'center',
  alignSelf: prop.alignSelf
}, prop.style]} ><Text style={[{ fontSize: 17 }, prop.textStyle]} >{prop.children}</Text></TouchableOpacity>)


export const Button = React.forwardRef((prop, ref) => {
  const { alignSelf, style, outline, children, fontSize = 17, p, pt, pb, pl, pr, pv, ph, h = 46, w, m, mt, mb, ml, mr, mv, mh, color, bgcolor, border = [], flexGrow, flex } = prop
  return (
    !outline ?
      <_Button
        ref={ref}
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
          { color }, bgcolor == 'white' ? {} :
            {
              borderColor: !border[1] && ((!bgcolor) ? '#0091EA' :
                bgcolor == 'yellow' ? '#ca0' : bgcolor) || border[1]
            }, {
            borderWidth: border[0] ? border[0] : 1,
            height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
            alignSelf, flexGrow, flex
          }, style]}

        textStyle={[
          !color && (bgcolor == 'white' ?
            { color: '#555' } :
            { color: 'white' }) ||
          { color: color },
          { paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr, }]}>
      </_Button>
      :
      <_Button
        ref={ref}
        {...prop}
        style={[
          , bgcolor == 'white' ? {} :
            { borderColor: !border[1] && (bgcolor == 'yellow' && '#fc3' || bgcolor || '#3399ff') || border[1] },
          {
            borderWidth: border[0] ? border[0] : 1,
            height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
          },
          style]}

        textStyle={[color &&
          { color: color } ||
          !color && bgcolor &&
          { color: bgcolor } ||
          { color: '#3399ff' },
        { paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr }]}>
        {children}
      </_Button>
  )
})


export const Div = React.forwardRef((prop, ref) => {
  const { style, children, p = 5, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, bgcolor, border = [], flex, alignItems, justifyContent, flexDirection, flexGrow } = prop
  return (
    <View
      ref={ref}
      onStartShouldSetResponder={prop.onClick}
      {...prop}
      style={[{
        overflow: 'hidden',
        maxHeight: '100%',
        flexGrow,
        flexDirection,
        alignItems, justifyContent, flex, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1] ,
        height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr
      }, style]}>
      {children}
    </View>
  )
})

export const Span = React.forwardRef((prop, ref) => {
  const { style, children, p, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, bgcolor, border = [], flex, alignItems, justifyContent, flexDirection, flexGrow } = prop
  return (
    <View
      onStartShouldSetResponder={prop.onClick}
      ref={ref}
      {...prop}
      style={[{
        overflow: 'hidden',
        maxHeight: '100%',
        flexGrow,
        flexDirection,
        alignItems, justifyContent, flex, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr
      }, style]}>
      {children}
    </View>
  )
})

export const Row = React.forwardRef((prop, ref) => {
  const { style, children, p = 5, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, bgcolor, border = [], flex, alignItems, justifyContent, flexDirection = 'row', flexGrow } = prop
  return (
    <View
      ref={ref}
      onStartShouldSetResponder={prop.onClick}
      {...prop}
      style={[{
        overflow: 'hidden',
        maxHeight: '100%',
        flexGrow,
        flexDirection,
        alignItems, justifyContent, flex, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr
      }, style]}>
      {children}
    </View>
  )
})

export const RowSpan = React.forwardRef((prop, ref) => {
  const { style, children, p, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, bgcolor, border = [], flex, alignItems, justifyContent, flexDirection = 'row', flexGrow } = prop
  return (
    <View
      ref={ref}
      onStartShouldSetResponder={prop.onClick}
      {...prop}
      style={[{
        overflow: 'hidden',
        maxHeight: '100%',
        flexGrow,
        flexDirection,
        alignItems, justifyContent, flex, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr
      }, style]}>
      {children}
    </View>
  )
})

export const Scroll = React.forwardRef((prop, ref) => {
  const { style, contentContainerStyle, className, children, p = 5, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, bgcolor, border = [], flex, alignItems, justifyContent, flexDirection, flexGrow } = prop
  return (
    <ScrollView
      ref={ref}
      onStartShouldSetResponder={prop.onClick}
      {...prop}
      style={[{
        flexDirection,
        overflowX: 'hidden',
        alignItems, justifyContent, flex, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr
      }, className, style]}
      contentContainerStyle={[{ flexGrow }, contentContainerStyle]}
    >
      {children}
    </ScrollView>
  )
})

export const ScrollHorizontal = React.forwardRef((prop, ref) => {
  const { style, contentContainerStyle, className, children, p = 5, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, bgcolor, border = [], flex, alignItems, justifyContent, flexDirection, flexGrow } = prop
  return (
    <ScrollView
      ref={ref}
      onStartShouldSetResponder={prop.onClick}
      horizontal={true}
      {...prop}
      style={[{
        overflowY: 'hidden',
        flexDirection,
        alignItems, justifyContent, flex, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr
      }, className, style]}
      contentContainerStyle={[{ flexGrow }, contentContainerStyle]}
    >
      {children}
    </ScrollView>
  )
})

export const Ul = React.forwardRef((prop, ref) => {
  const { style, children, p = 5, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, bgcolor, border = [], flex, alignItems, justifyContent, flexDirection, flexGrow } = prop
  return (
    <View
      ref={ref}
      onStartShouldSetResponder={prop.onClick}
      {...prop}
      style={[{
        maxHeight: '100%',
        flexGrow,
        flexDirection,
        alignItems, justifyContent, flex, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr
      }, style]}>
      {children}
    </View>
  )
})




export const H1 = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 33, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#000', bgcolor, border = [], flexGrow, flex } = props
  if (props.value)
    return (<TextInput onPressIn={props.onClick} multiline showSoftInputOnFocus={false} caretHidden={true} selectTextOnFocus={true} blurOnSubmit={true} ref={ref} value={props.value} {...props}
      style={[{
        padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
        margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        flexGrow, flex, alignSelf
      }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
      margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
      height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
      flexGrow, flex, alignSelf
    }, props.className, props.style]} >{props.children}</Text>)
})

export const H2 = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 26, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#000', bgcolor, border = [], flexGrow, flex } = props
  if (props.value)
    return (<TextInput onPressIn={props.onClick} multiline showSoftInputOnFocus={false} selectTextOnFocus={true} blurOnSubmit={true} caretHidden={true} ref={ref} value={props.value} {...props}
      style={[{
        padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
        margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        flexGrow, flex, alignSelf
      }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
      margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
      height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
      flexGrow, flex, alignSelf
    }, props.className, props.style]} >{props.children}</Text>)
})

export const H3 = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 24, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#000', bgcolor, border = [], flexGrow, flex } = props
  if (props.value)
    return (<TextInput onPressIn={props.onClick} multiline showSoftInputOnFocus={false} selectTextOnFocus={true} blurOnSubmit={true} caretHidden={true} ref={ref} value={props.value} {...props}
      style={[{
        padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
        margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        flexGrow, flex, alignSelf
      }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
      margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
      height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
      flexGrow, flex, alignSelf
    }, props.className, props.style]} >{props.children}</Text>)
})

export const H4 = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 21, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#000', bgcolor, border = [], flexGrow, flex } = props
  if (props.value)
    return (<TextInput onPressIn={props.onClick} multiline showSoftInputOnFocus={false} selectTextOnFocus={true} blurOnSubmit={true} caretHidden={true} ref={ref} value={props.value} {...props}
      style={[{
        padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
        margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        flexGrow, flex, alignSelf
      }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
      margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
      height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
      flexGrow, flex, alignSelf
    }, props.className, props.style]} >{props.children}</Text>)
})

export const H5 = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 18.5, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#000', bgcolor, border = [], flexGrow, flex } = props
  if (props.value)
    return (<TextInput onPressIn={props.onClick} multiline showSoftInputOnFocus={false} selectTextOnFocus={true} blurOnSubmit={true} caretHidden={true} ref={ref} value={props.value} {...props}
      style={[{
        padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
        margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        flexGrow, flex, alignSelf
      }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
      margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
      height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
      flexGrow, flex, alignSelf
    }, props.className, props.style]} >{props.children}</Text>)
})

export const H6 = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 16, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#000', bgcolor, border = [], flexGrow, flex } = props
  if (props.value)
    return (<TextInput onPressIn={props.onClick} multiline showSoftInputOnFocus={false} selectTextOnFocus={true} blurOnSubmit={true} caretHidden={true} ref={ref} value={props.value} {...props}
      style={[{
        padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
        margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
        height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
        flexGrow, flex, alignSelf
      }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      padding: p, paddingLeft: pl, paddingRight: pr, paddingBottom: pb, paddingTop: pt, paddingVertical: pv, paddingHorizontal: ph,
      margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
      height: h, width: w, fontFamily, fontSize, fontWeight: 'bold', color, backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1],
      flexGrow, flex, alignSelf
    }, props.className, props.style]} >{props.children}</Text>)
})





export const I = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 16, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#444', bgcolor, border = [], flexGrow, flex } = props
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props}
    style={[{
      flexGrow, flex, alignSelf, padding: p, paddingBottom: pb, paddingTop: pt, paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
      marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh,
      backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1], height: h, width: w, fontFamily, fontSize, color,
      fontStyle: 'italic', fontWeight: '600'
    }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      flexGrow, flex, alignSelf, padding: p, paddingBottom: pb, paddingTop: pt, paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
      marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh,
      backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1], height: h, width: w, fontFamily, fontSize, color,
      fontStyle: 'italic', fontWeight: '600'
    }, props.className, props.style]} >{props.children}</Text>)
})

export const P = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 16, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#444', bgcolor, border = [], flexGrow, flex } = props
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props}
    style={[{
      flexGrow, flex, alignSelf, padding: p, paddingBottom: pb, paddingTop: pt, paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
      marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh,
      backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1], height: h, width: w, fontFamily, fontSize, color,
      fontWeight: '600'
    }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      flexGrow, flex, alignSelf, padding: p, paddingBottom: pb, paddingTop: pt, paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
      marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh,
      backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1], height: h, width: w, fontFamily, fontSize, color,
      fontWeight: '600'
    }, props.className, props.style]} >{props.children}</Text>)
})

export const Li = React.forwardRef((props, ref) => {
  const { alignSelf = 'flex-start', fontSize = 16, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#444', bgcolor, border = [], flexGrow, flex } = props
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props}
    style={[{
      flexGrow, flex, alignSelf, padding: p, paddingBottom: pb, paddingTop: pt, paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
      marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh,
      backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1], height: h, width: w, fontFamily, fontSize, color,
      fontWeight: '600'
    }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      flexGrow, flex, alignSelf, padding: p, paddingBottom: pb, paddingTop: pt, paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
      marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh,
      backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1], height: h, width: w, fontFamily, fontSize, color,
      fontWeight: '600'
    }, props.className, props.style]} >{props.children}</Text>)
})

export const Small = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 13.5, p = 7, pt, pb, pl, pr, pv, ph, h, w, m, mt, mb, ml, mr, mv, mh, color = '#444', bgcolor, border = [], flexGrow, flex } = props
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props}
    style={[{
      flexGrow, flex, alignSelf, padding: p, paddingBottom: pb, paddingTop: pt, paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
      marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh,
      backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1], height: h, width: w, fontFamily, fontSize, color,
      fontWeight: '600'
    }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props}
    style={[{
      flexGrow, flex, alignSelf, padding: p, paddingBottom: pb, paddingTop: pt, paddingRight: pr, paddingLeft: pl, paddingHorizontal: ph, paddingVertical: pv,
      marginVertical: mv, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh,
      backgroundColor: bgcolor, borderWidth: border[0], borderColor: border[1], height: h, width: w, fontFamily, fontSize, color,
      fontWeight: '600'
    }, props.className, props.style]} >{props.children}</Text>)
})



export const Input = React.forwardRef((props, ref) => {
  const { alignSelf, fontSize = 16.5, p = 7, pt, pb, pl, pr, pv, ph, h = 50, w, m, mt, mb, ml, mr, mv, mh, color = '#444',
    bgcolor, border = [.3], flexGrow, flex } = props
  return (<View style={[{
    margin: m, marginTop: mt, marginBottom: mb, marginRight: mr, marginLeft: ml, marginHorizontal: mh, marginVertical: mv, color,
    bgcolor, borderWidth: border[0], borderColor: border[1], fontSize, alignSelf, flexGrow, flex, height: h,
    flexDirection: 'row', position: 'relative',
    borderRadius: 5,
    backgroundColor: '#fff',
  }, props.style]} >
    <TextInput ref={ref} onPress={props.onClick} autoCapitalize='none' autoCorrect={false} spellCheck={true} placeholder={props.p} {...props} style={[{ minWidth: '85%',left:1, textAlign: "right", fontSize: 15, padding: 6, height: '100%', position: 'absolute', color: props.color ? props.color : '#222', }, props.className, props.textStyle]} />
    {props.icon && <View onStartShouldSetResponder={props.iconPress} style={{ width: '15%', textAlign: 'center', position: 'absolute', right: 1, borderLeftWidth: .3, height: '100%', justifyContent: 'center', alignItems: 'center' }} ><Icon style={{}} name={props.icon} size={props.iconSize ? props.iconSize : 22} color={props.iconColor ? props.iconColor : "#666"} /></View>}
  </View>)
})

export const Textarea = React.forwardRef((props, ref) => {
  const { h = 100 } = props
  return (<TextInput onPressIn={props.onClick} autoCapitalize='none' autoCorrect={false} spellCheck={true}
    ref={ref} multiline {...props} style={[{ fontFamily, fontSize: 16, padding: 15, textAlign: 'right', marginHorizontal: 1.5, borderWidth: 1, borderRadius: 5, color: '#444', fontWeight: '600', height: h }, props.className, props.style]} />)
})

export const Br = (props) => (<Text {...props} style={[{ width: '100%', marginVertical: 5 }, props.className, props.style]} />)

export const Hr = (props) => (<Text {...props} style={[{ width: '100%', marginVertical: 5, borderTopWidth: 1 }, props.className, props.style]} />)

export const Mark = (props) => (<Text onPress={props.onClick} {...props} style={{ borderRadius:2.5,fontFamily, backgroundColor: '#fc7', height: props.h, paddingVertical:7,paddingHorizontal:4, margin: props.m, marginHorizontal: props.mh?props.mh:2.5, marginVertical: props.mv, marginRight: props.mr, marginLeft: props.ml, marginTop: props.mt, marginBottom: props.mb, alignSelf: 'center', fontSize, color: '#444', fontWeight: '600' }} >{props.children}</Text>)

export const CheckBox = (props) => {
  const { alignSelf, m, mt, mb, ml, mr, mv, mh } = props
  return <Icon checked={props.show} onPress={() => props.setShow && props.setShow(!props.show)} name={"check"} size={18.5} color="#fff" {...props}
    style={[{ width: 20, height: 20, borderWidth: .9, textAlign: 'center', margin: m, alignSelf, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh, marginVertical: mv }, { backgroundColor: props.show === false ? '#fff' : "#2c1" }, props.style]} />
}




export const Th = React.forwardRef((props, ref) =>
  <View ref={ref} {...props} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#888',  borderWidth:1.5, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} >
    <Text style={[{ fontFamily, fontWeight: 'bold', fontSize, paddingVertical: 10, textShadowRadius: 1.3, textShadowColor: 'red' }, props.textStyle]}> {props.children}</Text></View>)

export const Tb = React.forwardRef((props, ref) =>
  <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#aaa',  borderWidth:1,  justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} >
    <Text style={[{ fontFamily, fontWeight: '600', color: '#555', fontSize, paddingVertical: 10, }, props.textStyle]} > {props.children}</Text></View>)

export const Tbtn = React.forwardRef((props, ref) => <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} ><Button {...props} style={{ width: '99.8%', height: '100%', width: '100%' }} >{props.children}</Button></View>)

let odd =[]
export function Table({ body, header, color }) {
  for(let i = 0; i <= 100; i++){
    if(i % 2 == 0)
    odd.push(i)
  }
  let bgColor = (key) => ([{backgroundColor: odd.includes(key) ? color[0] : color[1] }])
  let textStyle ={color:color[2],textShadowColor:color[2]}
  return (
    <Span style={{ height: '50%', }} >
      <RowSpan flexDirection='row-reverse' >
        {header.map((f, i) => (<Th key={i} style={[bgColor(1)]} textStyle={[textStyle]}>{f}</Th>))}
      </RowSpan>
      <Span>
        {body.map((f, i) => (
          <RowSpan flexDirection='row-reverse' key={i}>
            {Object.values(f).map((a,n) => (
              <Tb key={n} style={ bgColor(i)} textStyle={textStyle} >{a}</Tb>
            ))}
          </RowSpan>
        ))}
      </Span>
    </Span>
  )
}