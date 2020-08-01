import React, {Component} from 'react';
import {Text, View, Linking} from 'react-native';
import {third, secondary} from '../../color/color';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Statistic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalData: '113',
    };
  }

  getData_API = () => {
    const baseURL = fetch('https://pinjollist.now.sh/api/companies');

    baseURL
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        const myObject = res.data;
        const count = Object.keys(myObject).length;
        this.setState({
          totalData: count,
        });
      });
  };

  componentDidMount() {
    this.getData_API();
  }
  render() {
    console.disableYellowBox = true;
    return (
      <View style={container}>
        <View style={{marginTop: 30}}>
          <Text style={titleStatistic}>Statistic</Text>
          <Text style={{fontSize: 16}}>Jumlah data statistik fintech.</Text>
        </View>

        <View style={{marginTop: 20, marginBottom: 20}}>
          <View style={cardDataStatistic}>
            <View style={{flexDirection: 'row'}}>
              <View style={cardLeft}>
                <Text style={{fontSize: 20, color: '#c1c1c1'}}>
                  Jumlah Perusahaan Terdaftar
                </Text>
              </View>
              <View style={cardRight}>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {this.state.totalData}
                </Text>
              </View>
            </View>
          </View>

          <View style={cardDataStatistic}>
            <View style={{flexDirection: 'row'}}>
              <View style={cardLeft}>
                <Text style={{fontSize: 20, color: '#c1c1c1'}}>Berizin</Text>
              </View>
              <View style={cardRight}>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  7
                </Text>
              </View>
            </View>
          </View>

          <View style={cardDataStatistic}>
            <View style={{flexDirection: 'row'}}>
              <View style={cardLeft}>
                <Text style={{fontSize: 20, color: '#c1c1c1'}}>
                  Perusahaan Syariah
                </Text>
              </View>
              <View style={cardRight}>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  6
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 16, marginBottom: 10}}>
            Kamu korban pinjaman online ilegal ?
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://lapor.go.id/instansi/otoritas-jasa-keuangan',
              )
            }>
            <View
              style={{
                backgroundColor: secondary,
                padding: 15,
                borderRadius: 4,
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>
                Laporkan ke lapor.go.id!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const cardLeft = {width: '80%', justifyContent: 'center'};
const cardRight = {width: '20%', justifyContent: 'center'};
const container = {
  backgroundColor: third,
  flex: 1,
  padding: 20,
};
const titleStatistic = {fontSize: 36, fontWeight: 'bold'};
const cardDataStatistic = {
  marginTop: 20,
  padding: 15,
  borderRadius: 4,
};
export default Statistic;
