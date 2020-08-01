import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Sound from 'react-native-sound';

const {width, height} = Dimensions.get('window');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siangHari: 'u72Hu29Le5g',
      malamHari: '8MqcuBT1vBM',
      changeVideo: false,
    };
  }

  playTrack = () => {
    const track = new Sound(
      'https://s2.radio.co/sf58a82d7d/listen',
      null,
      (e) => {
        if (e) {
          console.log('error loading track:', e);
        } else {
          track.play();
        }
      },
    );
  };

  render() {
    const {siangHari, malamHari, changeVideo} = this.state;
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />

        <View
          style={{
            flex: 1,
          }}>
          <WebView
            style={iframeStyle}
            source={{
              uri: `https://www.youtube.com/embed/${
                changeVideo ? malamHari : siangHari
              }?&autoplay=1&mute=1`,
            }}
            mediaPlaybackRequiresUserAction={
              Platform.OS !== 'android' || Platform.Version >= 17
                ? false
                : undefined
            }
            userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
          <View style={overlay}></View>
        </View>

        <View style={{height: height * 0.2, padding: 15}}>
          <View style={{marginBottom: 5}}>
            <Text
              style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>
              Radio Jalanan
            </Text>
          </View>

          <TouchableOpacity onPress={this.playTrack}>
            <Text>Play</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const iframeStyle = {
  position: 'absolute',
  left: '-125%',
  right: 0,
  top: '-10%',
  bottom: 0,
  height: height,
  width: width * 3.5,
};

const overlay = {
  position: 'absolute',
  top: 0,
  flex: 1,
  left: 0,
  height: height * 0.84,
  width: width,
  opacity: 0,
  backgroundColor: 'black',
};
export default App;
