import Video from "react-native-video";

const Video = (props) => {
  return (
    <View>
      <Video
        muted={false}
        repeat={false}
        resizeMode={"cover"}
        rate={1.0}
        // ignoreSilentSwitch={"ignore"}
        {...props}
      />
    </View>
  )
}

export default Video