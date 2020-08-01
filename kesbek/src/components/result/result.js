import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const currencyFormat = (num) => {
  return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

const Result = (props) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 35,
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>
            Cashback Terbesar
          </Text>
          <Text style={{fontSize: 22, fontWeight: '600'}}>
            {currencyFormat(parseInt(props.cashback))}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text style={fontSmall}>Harga Sebelum</Text>
            <Text style={{...numberSmall, textDecorationLine: 'line-through'}}>
              {currencyFormat(parseInt(props.beforePrice))}
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text style={fontSmall}>Total Bayar</Text>
            <Text style={numberSmall}>
              {currencyFormat(parseInt(props.totalPayment))}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={props.closeButton}>
        <View style={buttonStyle}>
          <Text style={buttonValue}>OKEY</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const fontSmall = {fontSize: 18, fontWeight: 'bold', textAlign: 'center'};
const numberSmall = {fontSize: 20, fontWeight: '600', textAlign: 'center'};
const buttonStyle = {
  margin: 20,
  marginLeft: 0,
  marginRight: 0,
  borderRadius: 6,
  backgroundColor: '#ca3e47',
  padding: 15,
};

const buttonValue = {
  textAlign: 'center',
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
};
export default Result;
