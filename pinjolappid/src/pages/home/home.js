import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {opacity, secondary, third} from '../../color/color';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  console.disableYellowBox = true;
  return (
    <View style={container}>
      <View style={cardHome}>
        <Text style={titleBrand}>.Pinjol</Text>
        <Text style={subtitleBrand}>
          Cari perusahaan fintech yang terdaftar dan memiliki lisensi OJK.
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View style={searchData}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                style={{marginRight: 10, paddingLeft: 10, fontWeight: 'bold'}}
                name="md-search"
                size={20}
                color={secondary}
              />
              <Text style={searchText}>Mau cari fintech apa?</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const container = {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  backgroundColor: third,
};
const cardHome = {padding: 25};
const titleBrand = {
  fontSize: 42,
  fontWeight: 'bold',
  textAlign: 'center',
  color: secondary,
};
const subtitleBrand = {
  textAlign: 'center',
  paddingLeft: 45,
  color: '#fff',
  paddingRight: 45,
  fontSize: 16,
};
const searchData = {
  padding: 12,
  marginTop: 25,
  borderRadius: 100,
  borderColor: opacity,
  borderWidth: 2,
};

const searchText = {fontSize: 16, color: opacity};
export default Home;
