import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Form from './Components/Form';


function App() {

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [message, setMessage] = useState('')
  const [captcha, setCaptcha] = useState(true)

  return (
    <SafeAreaView style={{ }}>
    <Form
          f p ch ph
          // t pr i m im
          //  c s gc
          fSwiper
          // eSwiper
          // pSwiper
          // cpSwiper
          // tSwiper
          // prSwiper
          // imSwiper
          // iSwiper

          fIconLeft={<Text style={{ color: 'white', backgroundColor: 'blue', padding: 7 }}>del</Text>}
          fIconRight={<Text style={{ color: 'white', backgroundColor: 'red', padding: 7 }}>del</Text>} 
          
          // eIconLeft={<Text style={{ color: 'white', backgroundColor: 'blue', padding: 7 }}>del</Text>}
          // eIconRight={<Text style={{ color: 'white', backgroundColor: 'red', padding: 7 }}>del</Text>} 
        
          // pIconLeft={<Text style={{ color: 'white', backgroundColor: 'blue', padding: 7 }}>del</Text>}
          // pIconRight={<Text style={{ color: 'white', backgroundColor: 'red', padding: 7 }}>del</Text>} 
        
          // cpIconLeft={<Text style={{ color: 'white', backgroundColor: 'blue', padding: 7 }}>del</Text>}
          // cpIconRight={<Text style={{ color: 'white', backgroundColor: 'red', padding: 7 }}>del</Text>} 
        
          // tIconLeft={<Text style={{ color: 'white', backgroundColor: 'blue', padding: 7 }}>del</Text>}
          // tIconRight={<Text style={{ color: 'white', backgroundColor: 'red', padding: 7 }}>del</Text>} 
        
          // prIconLeft={<Text style={{ color: 'white', backgroundColor: 'blue', padding: 7 }}>del</Text>}
          // prIconRight={<Text style={{ color: 'white', backgroundColor: 'red', padding: 7 }}>del</Text>} 

          // iIconLeft={<Text style={{ color: 'white', backgroundColor: 'blue', padding: 7 }}>del</Text>}
          // iIconRight={<Text style={{ color: 'white', backgroundColor: 'red', padding: 7 }}>del</Text>} 

          // imIconLeft={<Text style={{ color: 'white', backgroundColor: 'blue', padding: 7 }}>del</Text>}
          // imIconRight={<Text style={{ color: 'white', backgroundColor: 'red', padding: 7 }}>del</Text>} 
          
          fullname={fullname} setFullname={setFullname}
          // email={email} setEmail={setEmail}
          phone={phone} setPhone={setPhone}
          password={password} setPassword={setPassword}
          checkbox={checkbox} setCheckbox={setCheckbox}
          onPress={() => registerSend()}
          // captcha={captcha} setCaptcha={setCaptcha} 
          // confirmPassword={"password"} setConfirmPassword={()=>{}}
          // sizeY={.75}
          // top={30}
          // style={{minHeight:'99.95%'}}
        >
        </Form>
    </SafeAreaView>
  )
}



export default App;