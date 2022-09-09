import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {notoserif} from './font.scss'


let fontFamily = 'serif'
let fontSize = 16

// grand
// btitrbold
// byekan

export const Button = React.forwardRef((prop, ref) => <TouchableOpacity ref={ref} onPress={prop.onClick} {...prop} style={[{ backgroundColor: '#ccc', paddingHorizontal: 17, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, textAlign: 'center', height: 47, maxHeight:'100%'
}, prop.style]} ><Text style={[{fontSize:17},prop.textStyle]} >{prop.children}</Text></TouchableOpacity>)

export const Div = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ paddingVertical: 5 }, props.className, props.style]} >{props.children}</View>)

export const Span = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[props.className, props.style]} >{props.children}</View>)

export const Row = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row', paddingVertical: 5 }, props.className, props.style]}>{props.children}</View>)

export const RowSpan = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row' }, props.className, props.style]}>{props.children}</View>)

export const RowReverse = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', paddingVertical: 5 }, props.className, props.style]}>{props.children}</View>)

export const RowReverseSpan = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse' }, props.className, props.style]} >{props.children}</View>)

export const Scroll = React.forwardRef((props, ref) => <ScrollView ref={ref}  {...props} style={[{ paddingVertical: 5 }, props.className, props.style]} >{props.children}</ScrollView>)

export const ScrollHorizontal = React.forwardRef((props, ref) => <ScrollView ref={ref} {...props} horizontal={true} style={[props.className, props.style]} >{props.children}</ScrollView>)

export const Ul = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ paddingVertical: 5 }, props.className, props.style]}>{props.children}</View>)




export const H1 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 33, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily, fontSize: 33, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H2 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 26, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily, fontSize: 26, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H3 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 14, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily, fontSize: 24, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H4 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 21, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily, fontSize: 21, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H5 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily, fontSize: 18.5, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H6 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 16, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily, fontSize: 16, fontWeight: 'bold', marginVertical: 10, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})



export const I = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 16, marginVertical: 10, fontStyle: 'italic', color: '#444', fontWeight: '600' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily, fontSize: 16, marginVertical: 10, fontStyle: 'italic', color: '#444', fontWeight: '600' }, props.className, props.style]} >{props.children}</Text>)
})

export const P = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontSize: 16, fontFamily, marginVertical: 10, color: '#444', fontWeight: '600' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontSize: 16, fontFamily, marginVertical: 10, color: '#444', fontWeight: '600' }, props.className, props.style]} >{props.children}</Text>)
})

export const Li = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize, marginVertical: 10, padding: 3.5, alignSelf: 'flex-start', color: '#444', fontWeight: '600' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily, fontSize, marginVertical: 10, padding: 3.5, alignSelf: 'flex-start', color: '#444', fontWeight: '600' }, props.className, props.style]}  >{props.children}</Text>)
})

export const Small = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 13, marginVertical: 10, color: '#444', fontWeight: '600' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily, fontSize: 13, marginVertical: 10, color: '#444', fontWeight: '600' }, props.className, props.style]}  >{props.children}</Text>)
})

export const Input = React.forwardRef((props, ref) => {
  return (<TextInput onPressIn={props.onClick} ref={ref} autoCapitalize='none' autoCorrect={false} spellCheck={true}
    {...props} style={[{ fontFamily, textAlign: "right", fontSize, padding: 10, borderWidth: 1, borderColor: '#999', marginHorizontal: 1.5, borderRadius: 5 }, props.className, props.style]} />)
})

export const Textarea = React.forwardRef((props, ref) => {
  return (<TextInput onPressIn={props.onClick} autoCapitalize='none' autoCorrect={false} spellCheck={true}
    ref={ref} multiline {...props} style={[{ fontFamily, fontSize, minHeight: 90, padding: 4, textAlign: 'right', marginHorizontal: 1.5, borderWidth: 1, borderRadius: 5, color: '#444', fontWeight: '600' }, props.className, props.style]} />)
})



export const Br = (props) => (<Text {...props} style={[{ width: '100%', marginVertical: 5 }, props.className, props.style]} />)

export const Hr = (props) => (<Text {...props} style={[{ width: '100%', marginVertical: 5, borderTopWidth: 1 }, props.className, props.style]} />)

export const Mark = (props) => (<Text onPress={props.onClick} {...props} style={{ fontFamily, backgroundColor: '#fc7', height: 40, paddingHorizontal: 3, marginHorizontal: 2, alignSelf: 'center', fontSize, color: '#444', fontWeight: '600' }} >{props.children}</Text>)



export const Table = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', flex: 1, flexWrap: 'wrap', minWidth: '100%' }, props.className, props.style]}>{props.children}</View>)

export const Tbody = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', flex: 1, flexWrap: 'wrap', minWidth: '100%', minHeight: '100%' }, props.className, props.style]}>{props.children}</View>)

export const Thead = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', minWidth: '100%' }, props.className, props.style]}>{props.children}</View>)



export const Th = React.forwardRef((props, ref) =>
  <View ref={ref} {...props} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} >
    <Text style={[{ fontFamily, fontWeight: 'bold', fontSize, paddingVertical: 10, textShadowRadius: 1, textShadowColor: 'black' }, props.textStyle]}> {props.children}</Text></View>)

export const Tb = React.forwardRef((props, ref) =>
  <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} >
    <Text style={[{ fontFamily, fontWeight: '600', color: '#555', fontSize, paddingVertical: 10, }, props.textStyle]} > {props.children}</Text></View>)



export const Tbtn = React.forwardRef((props, ref) => <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5, }, props.style]} ><Button {...props} style={{ width: '99.8%' }} >{props.children}</Button></View>)


export const Tr = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flex: 1 }, props.className, props.style]} >{props.children}</View>)

export const Tc = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', flex: 1, justifyContent: 'center', }, props.className, props.style]}>{props.children}</View>)



export const CheckBox = (props) => {
  return <Icon checked={props.show} onPress={() => props.setShow && props.setShow(!props.show)} name={"check"} size={18} color="#fff" {...props} style={[{ width: 18, borderWidth: .9, }, { backgroundColor: props.show === false ? '#fff' : "#2c1" }, props.style]} />
}
