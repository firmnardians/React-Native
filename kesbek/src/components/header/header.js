import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#222831',
      }}>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
          }}>
          KESBƎꓘ
        </Text>
      </View>
    </View>
  );
};

export default Header;
