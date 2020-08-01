import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Jumbotron = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#222831',
      }}>
      <View style={{padding: 20}}>
        <View style={inputGroup}>
          <Text style={textJumbotron}>Harga Normal</Text>
          <View style={cardValue}>
            <TextInput
              selectTextOnFocus={false}
              keyboardType={'phone-pad'}
              style={inputStyle}
              value={props.normal}
              onChangeText={props.handleNormal}
            />
          </View>
        </View>

        <View style={inputGroup}>
          <Text style={textJumbotron}>Jumlah Persen</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '30%'}}>
              <View style={cardValue}>
                <TextInput
                  selectTextOnFocus={false}
                  keyboardType={'phone-pad'}
                  style={inputStyle}
                  value={props.persen}
                  maxLength={2}
                  onChangeText={props.handlePersen}
                />
              </View>
            </View>
            <View style={{width: '70%'}}>
              <View
                style={{
                  padding: 15,
                }}>
                <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>
                  %
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={inputGroup}>
          <Text style={textJumbotron}>Maksimal Harga Cashback</Text>
          <View style={cardValue}>
            <TextInput
              selectTextOnFocus={false}
              keyboardType={'phone-pad'}
              style={inputStyle}
              value={props.max}
              onChangeText={props.handleMax}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const inputGroup = {
  marginTop: 15,
};
const inputStyle = {
  height: 50,
  backgroundColor: '#222831',
  borderBottomColor: 'gray',
  borderBottomWidth: 2,
  padding: 10,
  color: '#fff',
};

const cardValue = {
  backgroundColor: '#414141',
  borderRadius: 6,
  padding: 0,
  marginTop: 5,
  marginBottom: 10,
};
const textJumbotron = {fontSize: 15, color: '#ffffff', fontWeight: 'bold'};
export default Jumbotron;
