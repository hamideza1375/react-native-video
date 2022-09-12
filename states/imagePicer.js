import * as ImagePicker from "react-native-image-picker";


export const imagePicker = (mediaType) => new Promise(async (resolve, reject) => {
  ImagePicker.launchImageLibrary({ mediaType }, (res) => {
    if (!res.didCancel) { let imageName = (new Date().getTime() + Math.random() * 10000).toString() + '.jpg'; resolve({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri }, imageName) }
  else alert('دوباره امتحان کنید')
})
})


export const cameraPicker = (mediaType) => new Promise(async (resolve, reject) => {
  ImagePicker.launchCamera({ mediaType }, (res) => {
    if (!res.didCancel) { let imageName = (new Date().getTime() + Math.random() * 10000).toString() + '.jpg'; resolve({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri }, imageName) }
  else alert('دوباره امتحان کنید')
})
})

