import { PermissionsAndroid } from 'react-native';
import * as RNFS from 'react-native-fs';
import {create} from './notification'

 async function download(filename) {

  let prgs;
  if (Platform.OS === 'android') {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: '',
        message: '',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      }
    );
    if (permission === 'denied') return;
    if (permission === 'granted') {
      RNFS.downloadFile({
        fromUrl: filename,
        toFile: `${RNFS.DownloadDirectoryPath}`,
        discretionary: true,
        progress: (res) => {
          let progressPercent = (res.contentLength * (100 * res.bytesWritten)).toString()
          prgs = progressPercent.slice(0, 2)
          if (prgs > '96') prgs = '100'
          console.log(prgs)
        },
      }).promise
        .then(() => {
          // create(imgName, prgs + '%')
          create('dddd', 'ddddererr')

        })
        .catch((err) => console.log(err))
    }
  }
}


export default download
