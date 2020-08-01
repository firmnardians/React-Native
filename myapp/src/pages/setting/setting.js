import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

class Setting extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#fff"
          translucent={false}
          networkActivityIndicatorVisible={true}
        />
        <Text>Setting,</Text>
      </View>
    );
  }
}

export default Setting;
