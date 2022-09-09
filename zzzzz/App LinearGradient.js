import React from 'react'
import { Text } from 'react-native';
import LinearGradient from './Components/LinearGradient';


export default function App() {
  return (
    <LinearGradient start={{ x: 1, y:2 }} colors={['blue', 'red', 'green']}>
      <Text >Sign in with Facebook</Text>
      <Text >Sign in with Facebook</Text>
      <Text >Sign in with Facebook</Text>
    </LinearGradient>
  )
}
