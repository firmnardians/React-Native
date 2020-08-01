import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../assets/css/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Navbar = props => {
  return (
    <View style={Styles.navbar}>
      <View style={Styles.navbar_menu}>
        <TouchableOpacity onPress={props.home}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.navbar_menu}>
        <TouchableOpacity style={Styles.navbar_menu} onPress={props.graph}>
          <Text>Graph</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.navbar_menu}>
        <TouchableOpacity onPress={props.setting}>
          <Text>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
