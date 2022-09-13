import React from 'react'
import { View, Text} from 'react-native';
import _Button from './components/Button';


let fontFamily = 'serif'
let fontSize = 16

 const Table = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse',  flexWrap: 'wrap', minWidth: '100%', height:'100vh' }, props.className, props.style]}>{props.children}</View>)

 const Tbody = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', flex: 1, flexWrap: 'wrap', minWidth: '100%', minHeight: '100%' }, props.className, props.style]}>{props.children}</View>)

 const Thead = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', minWidth: '100%' }, props.className, props.style]}>{props.children}</View>)



 const Th = React.forwardRef((props, ref) =>
  <View ref={ref} {...props} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} >
    <Text style={[{ fontFamily, fontWeight: 'bold', fontSize, paddingVertical: 10, textShadowRadius: 1, textShadowColor: 'black' }, props.textStyle]}> {props.children}</Text></View>)

 const Tb = React.forwardRef((props, ref) =>
  <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} >
    <Text style={[{ fontFamily, fontWeight: '600', color: '#555', fontSize, paddingVertical: 10, }, props.textStyle]} > {props.children}</Text></View>)



 const Tbtn = React.forwardRef((props, ref) => <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5}, props.style]} ><_Button {...props} style={{ width: '99.8%',height:'100%', width:'100%' }} >{props.children}</_Button></View>)


 const Tr = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flex: 1 }, props.className, props.style]} >{props.children}</View>)

 const Tc = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', flex: 1, justifyContent: 'center', }, props.className, props.style]}>{props.children}</View>)









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