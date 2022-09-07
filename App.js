import React from 'react';
import { View } from 'react-native';
import Video from "react-native-video";

const App = () => {
  return (
    <View>

      <Video
        muted={false}
        repeat={false}
        resizeMode={"cover"}
        controls={true} style={{ width: '100%', height: 333, borderWidth: 5 }}
        rate={1.0}
        ignoreSilentSwitch={"ignore"}
        source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} />

    </View>
  )
}

export default App
