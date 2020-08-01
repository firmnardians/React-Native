import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DataJson from '../../services/data.json';
import BouncingPreloader from 'react-native-bouncing-preloader';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: false,
      isLoading: false,
      search: null,
      listData: DataJson,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: true,
      });
    }, 2000);

    setTimeout(() => {
      this.setState({
        fade: true,
      });
    }, 1800);
  }

  render() {
    console.disableYellowBox = true;
    const {listData, search, isLoading, fade} = this.state;

    const mapListSurah = listData
      .filter((item) => {
        if (this.state.search === null) {
          return item;
        } else if (item.nama.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      })
      .map((items) => {
        return (
          <TouchableOpacity
            key={items.nomor}
            style={cardListSurah}
            onPress={() =>
              this.props.navigation.navigate('Detail', {
                itemId: items.nomor,
                itemName: items.nama,
                itemAyat: items.ayat,
                itemType: items.type,
                itemArti: items.arti,
                itemAudio: items.audio,
              })
            }>
            <View style={margin}>
              <Text style={titleCard}>{items.nama}</Text>
              <Text style={hint}>{items.arti}</Text>
              <Text style={hint}>
                Total {items.ayat} Ayat, diturunkan di {items.type}
              </Text>
            </View>
          </TouchableOpacity>
        );
      });

    return (
      <>
        {!isLoading ? (
          <View style={container}>
            {!fade ? (
              <BouncingPreloader
                icons={[
                  require('../../images/1.png'),
                  require('../../images/2.png'),
                  require('../../images/3.png'),
                  require('../../images/4.png'),
                  require('../../images/5.png'),
                  require('../../images/6.png'),
                ]}
                leftRotation="-680deg"
                rightRotation="360deg"
                leftDistance={-180}
                rightDistance={-250}
                speed={900}
                size={50}
              />
            ) : (
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 32}}>REHAT</Text>
              </View>
            )}
          </View>
        ) : (
          <>
            <Header />
            <View style={{backgroundColor: '#fff'}}>
              <TextInput
                onChangeText={(text) => {
                  this.setState({search: text});
                }}
                style={inputSearch}
                placeholder="Mau cari surah apa hari ini?"
              />
            </View>

            <ScrollView style={{backgroundColor: '#ffffff'}}>
              <View style={{paddingTop: 10}}>{mapListSurah}</View>
            </ScrollView>
          </>
        )}
      </>
    );
  }
}

export const Header = () => {
  return (
    <View
      style={{
        paddingTop: 15,
        paddingBottom: 15,
        elevation: 5,
        paddingLeft: 15,
        backgroundColor: '#fff',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 26}}>REHAT</Text>
    </View>
  );
};

const margin = {
  margin: 15,
};

const cardListSurah = {
  margin: 10,
  backgroundColor: '#fff',
  borderRadius: 6,
  elevation: 5,
};

const inputSearch = {
  padding: 10,
  margin: 10,
  borderColor: '#2452f7a1',
  borderWidth: 1,
  borderRadius: 4,
  fontSize: 16,
};

const titleCard = {fontWeight: 'bold', fontSize: 16};

const hint = {color: '#6a737c'};

const container = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
};

export default Home;
