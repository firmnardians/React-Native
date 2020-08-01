import React from 'react';
import {Text, ScrollView, Image, Linking, View} from 'react-native';
import {third} from '../../color/color';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Detail = ({route}) => {
  console.disableYellowBox = true;
  const {
    perusahaan,
    registration_type,
    syariah,
    alamat,
    website,
    date,
    register,
  } = route.params;

  const logicType =
    registration_type === 'Terdaftar' || registration_type === 'Berizin';
  return (
    <ScrollView style={{backgroundColor: third}}>
      <View style={container}>
        <View
          style={{
            borderBottomWidth: 10,
            borderBottomColor: '#333',
            padding: 20,
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>{perusahaan}</Text>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{register}</Text>
            <Text style={{marginTop: 10, marginBottom: 5}}>📅 {date}.</Text>
            {syariah === true ? <Text>🌙 Syariah</Text> : <Text></Text>}

            <View style={{marginTop: 20}}>
              <Text
                style={{color: '#a4aba4', fontWeight: 'bold', fontSize: 16}}>
                Alamat
              </Text>
              {alamat === '' ? (
                <Text>Tidak ada alamat.</Text>
              ) : (
                <Text style={{fontSize: 14}}>{alamat}</Text>
              )}
            </View>
          </View>
          <TouchableOpacity onPress={() => Linking.openURL(website)}>
            <View
              style={{
                padding: 15,
                backgroundColor: '#d63447',
                marginTop: 20,
                borderRadius: 4,
              }}>
              <Text
                style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>
                LIHAT WEBSITE
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
            paddingTop: 50,
          }}>
          {logicType ? (
            <Text style={{fontSize: 70}}>🤢</Text>
          ) : (
            <Text style={{fontSize: 70}}>🥳</Text>
          )}

          <View style={{marginTop: 20}}>
            {logicType ? (
              <>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Tidak Terdaftar
                </Text>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                  Fintech yang kamu cari tidak terdaftar di OJK.
                </Text>
              </>
            ) : (
              <>
                <Text
                  style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Terdaftar
                </Text>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                  Fintech yang kamu cari terdaftar di OJK.
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const container = {
  padding: 0,
};
export default Detail;
