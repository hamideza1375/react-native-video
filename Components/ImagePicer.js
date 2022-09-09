import { launchImageLibrary, launchCamera } from 'react-native-image-picker';


  export const imagePicker = (mediaType,sendImage) => {
    launchImageLibrary({ mediaType }, (res) => {
      if (!res.didCancel) { let imageName = (new Date().getTime() + Math.random() * 10000).toString() + '.jpg'; sendImage({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri }, imageName) }
      else console.log('err');
    })
  }


  export const cameraPicker = (mediaType,sendImage) => {
    launchCamera({ mediaType }, (res) => {
      if (!res.didCancel) { let imageName = (new Date().getTime() + Math.random() * 10000).toString() + '.jpg'; sendImage({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri }, imageName) }
      else console.log('err');
    })
  }
