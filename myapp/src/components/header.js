import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../assets/css/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = props => {
  return (
    <View style={Styles.header}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={Styles.header_brand}>Covid</Text>
        <TouchableOpacity onPress={props.settings}>
          <Icon
            name="md-settings"
            style={{paddingTop: 4}}
            size={26}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
