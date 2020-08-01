import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import Styles from '../../assets/css/style';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });
  return (
    <View style={Styles.splash}>
      <Image
        style={{width: 120, height: 120}}
        source={require('../../assets/images/covid.png')}
      />
      <Text style={Styles.splash_title}>Covid Indonesia</Text>
    </View>
  );
};

export default Splash;
