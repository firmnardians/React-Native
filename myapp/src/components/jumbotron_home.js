import React from 'react';
import {Linking, View, Text} from 'react-native';
import Styles from '../assets/css/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Jumbotron_home = props => {
  const phoneNumber = '119';
  return (
    <View style={props.animatRounded}>
      <Text style={{fontSize: 21, color: 'white', fontWeight: 'bold'}}>
        Apakah kamu merasa sakit?
      </Text>
      <Text style={Styles.color_white}>
        Jika kamu merasa sakit dengan gejala Covid-19 segera telephone atau SMS
        untuk meminta pertolongan.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <View
          style={{
            backgroundColor: 'red',
            paddingBottom: 15,
            paddingTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
            width: '45%',
            borderRadius: 100,
          }}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Telephone
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'orange',
            paddingBottom: 15,
            paddingTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
            width: '45%',
            borderRadius: 100,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            SMS
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Jumbotron_home;
