import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ButtonPrimary = (props) => {
  return (
    <TouchableOpacity onPress={props.handleSubmit}>
      <View style={buttonStyle}>
        <Text style={buttonValue}>HITUNG</Text>
      </View>
    </TouchableOpacity>
  );
};

const ButttonPrimaryDisable = () => {
  return (
    <View style={buttonStyleDisable}>
      <Text style={buttonValue}>HITUNG</Text>
    </View>
  );
};

const buttonStyle = {
  margin: 20,
  marginBottom: 30,
  borderRadius: 6,
  backgroundColor: '#ca3e47',
  padding: 15,
};

const buttonStyleDisable = {
  margin: 20,
  borderRadius: 6,
  opacity: 1,
  backgroundColor: '#ca3e4775',
  padding: 15,
};

const buttonValue = {
  textAlign: 'center',
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
};
export {ButtonPrimary, ButttonPrimaryDisable};
