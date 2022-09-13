import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


let fontFamily = 'serif'
let fontSize = 16

// grand
// btitrbold
// byekan

const _Button = React.forwardRef((prop, ref) => <TouchableOpacity ref={ref} onPress={prop.onClick} {...prop} style={[{
  backgroundColor: '#ccc', paddingHorizontal: 17, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, textAlign: 'center',
}, prop.style]} ><Text style={[{ fontSize: 17 }, prop.textStyle]} >{prop.children}</Text></TouchableOpacity>)



export const Button = React.forwardRef((prop,ref) => {
  const { color, style, outline, bgcolor, children, border = [], fontSize = 17, padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingVertical, paddingHorizontal, height = 46, width, margin, marginTop, marginBottom, marginLeft, marginRight, marginVertical, marginHorizontal } = prop

  return (
    !outline ?
      <_Button
        {...prop}
        ref={ref}
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
            height, width, margin, marginTop, marginBottom, marginLeft, marginRight, marginVertical, marginHorizontal,
          }, style]}

        textStyle={[
          !color && (bgcolor == 'white' ?
            { color: '#555' } :
            { color: 'white' }) ||
          { color: color },
          { paddingHorizontal, paddingVertical, fontSize, padding, paddingTop, paddingBottom, paddingLeft, paddingRight, }]}>
      </_Button>
      :
      <_Button
        {...prop}
        style={[
          , bgcolor == 'white' ? {} :
            { borderColor: !border[1] && (bgcolor == 'yellow' && '#fc3' || bgcolor || '#3399ff') || border[1] },
          {
            borderWidth: border[0] ? border[0] : 1,
            height, width, margin, marginTop, marginBottom, marginLeft, marginRight, marginVertical, marginHorizontal,
          },
          style]}

        textStyle={[color &&
          { color: color } ||
          !color && bgcolor &&
          { color: bgcolor } ||
          { color: '#3399ff' },
        { paddingHorizontal, paddingVertical, fontSize, padding, paddingTop, paddingBottom, paddingLeft, paddingRight }]}>
        {children}
      </_Button>
  )
})











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



export const Input = React.forwardRef((props, ref) =>
  <View style={[styles.container, props.style]} >
    <TextInput ref={ref} autoCapitalize='none' autoCorrect={false} spellCheck={true} {...props} style={[{ textAlign: "right",maxWidth:'85%', fontSize: 15, padding: 6, height: '100%', minWidth: '84.3%', position: 'absolute', left: 1, color: props.color ? props.color : '#222', }, props.className, props.textStyle]} />
    {props.icon && <View onStartShouldSetResponder={props.iconPress} style={styles.ViewIcon} ><Icon style={props.styleIcon} name={props.icon} size={props.iconSize ? props.iconSize : 22} color={props.iconColor ? props.iconColor : "#666"} /></View>}
  </View>
)


export const Textarea = React.forwardRef((props, ref) => {
  return (<TextInput onPressIn={props.onClick} autoCapitalize='none' autoCorrect={false} spellCheck={true}
    ref={ref} multiline {...props} style={[{ fontFamily, fontSize, padding: 15, textAlign: 'right', marginHorizontal: 1.5, borderWidth: 1, borderRadius: 5, color: '#444', fontWeight: '600' }, props.className, props.style]} />)
})



export const Br = (props) => (<Text {...props} style={[{ width: '100%', marginVertical: 5 }, props.className, props.style]} />)

export const Hr = (props) => (<Text {...props} style={[{ width: '100%', marginVertical: 5, borderTopWidth: 1 }, props.className, props.style]} />)

export const Mark = (props) => (<Text onPress={props.onClick} {...props} style={{ fontFamily, backgroundColor: '#fc7', height: 40, paddingHorizontal: 3, marginHorizontal: 2, alignSelf: 'center', fontSize, color: '#444', fontWeight: '600' }} >{props.children}</Text>)



export const Table = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[props.className, props.style]} >{props.children}</View>)

export const TableRow = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse' }, props.className, props.style]} >{props.children}</View>)

export const Thead = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', minWidth: '100%' }, props.className, props.style]}>{props.children}</View>)

export const TheadRow = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[props.className, props.style]} >{props.children}</View>)


export const Th = React.forwardRef((props, ref) =>
  <View ref={ref} {...props} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} >
    <Text style={[{ fontFamily, fontWeight: 'bold', fontSize, paddingVertical: 10, textShadowRadius: 1, textShadowColor: 'black' }, props.textStyle]}> {props.children}</Text></View>)

export const Tb = React.forwardRef((props, ref) =>
  <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} >
    <Text style={[{ fontFamily, fontWeight: '600', color: '#555', fontSize, paddingVertical: 10, }, props.textStyle]} > {props.children}</Text></View>)



export const Tbtn = React.forwardRef((props, ref) => <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} ><Button {...props} style={{ width: '99.8%', height: '100%', width: '100%' }} >{props.children}</Button></View>)


export const Tc = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flex: 1 }, props.className, props.style]} >{props.children}</View>)

export const Tr = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', flex: 1, justifyContent: 'center', }, props.className, props.style]}>{props.children}</View>)



export const CheckBox = (props) => {
  return <Icon checked={props.show} onPress={() => props.setShow && props.setShow(!props.show)} name={"check"} size={18} color="#fff" {...props} style={[{ width: 18, borderWidth: .9, }, { backgroundColor: props.show === false ? '#fff' : "#2c1" }, props.style]} />
}










export default Input;
const styles = StyleSheet.create({
  ViewIcon: {
    width: '15%',
    textAlign: 'center',
    position: 'absolute',
    right: 1,
    borderLeftWidth: .3,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    textAlign: "right",
    width: '84.3%',
    fontSize: 15,
    padding: 6,
    height: '100%',
    minWidth: '84.3%',
    position: 'absolute',
    left: 1,
  },
  container: {
    borderWidth: .3,
    flexDirection: 'row',
    position: 'relative',
    minHeight: 55,
    height: 'auto',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
})