import React, {Component} from 'react';
import axios from 'axios';
import {Text, TouchableOpacity, View, Linking, StatusBar} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const regex = /(<([^>]+)>)/gi;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomSheet: false,
      isLoading: true,
      ayat: '',
      indoTranslate: '',
      nomor: '',
      loading: false,
      translate: false,
      playAudio: false,
      bookmark: false,
      detailData: [],
    };
  }

  getDetailData_API = async () => {
    const {itemId} = this.props.route.params;
    const baseURL = fetch(
      `https://al-quran-8d642.firebaseio.com/surat/${itemId}.json?print=pretty`,
    );

    await baseURL
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        this.setState({
          detailData: res,
          isLoading: false,
        });
      });
  };

  playAudio_API = () => {
    alert('Fitur ini belum tersedia.');
    // const {itemAudio} = this.props.route.params;
    // this.setState({
    //   playAudio: true,
    // });
  };

  // stopAudio_API = () => {
  //   const {itemAudio} = this.props.route.params;

  //   this.setState({
  //     playAudio: false,
  //   });
  // };

  handleTranslate = () => {
    this.setState({
      translate: !this.state.translate,
    });
  };

  handleShare = (nomor, indoTranslate, ayat) => {
    this.setState(
      {
        nomor: nomor,
        indoTranslate: indoTranslate,
        ayat: ayat,
        bottomSheet: !this.state.bottomSheet,
      },
      () => this.RBSheet.open(),
    );
  };

  shareTerjemahan = () => {
    Linking.openURL(
      `https://twitter.com/intent/tweet?text=${this.state.indoTranslate} \n \n Rehat - https://s.id/rehat-app`,
    );
  };

  shareAyat = () => {
    Linking.openURL(
      `https://twitter.com/intent/tweet?text=${this.state.ayat} \n \n Rehat - https://s.id/rehat-app`,
    );
  };

  async componentDidMount() {
    this.mounted = true;
    await setTimeout(() => {
      this.getDetailData_API();
    }, 300);
  }

  async componentWillUnmount() {
    this.mounted = false;
    if (this.state.detailData.length > 0) {
      await this.getDetailData_API();
    }
  }

  render() {
    console.disableYellowBox = true;
    const {itemName, itemAyat, itemType} = this.props.route.params;
    const {detailData} = this.state;

    const mapDataDetail = detailData.map((item) => {
      const translate = item.tr.replace(regex, '');
      const nomor = item.nomor;
      const indoTranslate = item.id;
      const ayat = item.ar;
      return (
        <View key={item.nomor} style={container}>
          <View style={grid}>
            <View style={numberSurah}>
              <Text style={titleNumber}>{item.nomor}</Text>
            </View>
            <View style={{width: '85%'}}>
              <Text style={titleSurah}>{item.ar}</Text>
            </View>
            <View style={{width: '10%'}}>
              <TouchableOpacity
                onPress={() => this.handleShare(nomor, indoTranslate, ayat)}>
                <Icon
                  style={{paddingLeft: 10}}
                  name="md-more"
                  size={26}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={cardTranslate}>
            <Text style={{fontSize: 14}}>{translate.toUpperCase()}</Text>
            {!this.state.translate ? (
              <Text></Text>
            ) : (
              <Text style={{color: '#6a737c'}}>{item.id}</Text>
            )}
          </View>
        </View>
      );
    });
    return (
      <>
        {this.state.isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading {itemName} </Text>
          </View>
        ) : (
          <ScrollView style={{backgroundColor: '#ffffff'}}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
            <View style={{padding: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 24}}>
                Surah {itemName}
              </Text>
              <Text style={{color: '#6a737c'}}>
                Total {itemAyat} Ayat dan diturunkan di {itemType}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={tabTool}>
                {!this.state.playAudio ? (
                  <>
                    <TouchableOpacity onPress={() => this.playAudio_API()}>
                      <Icon
                        style={{textAlign: 'center'}}
                        name="md-play"
                        size={30}
                        color="#333"
                      />
                      <Text>Dengarkan</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    {/* <TouchableOpacity onPress={() => this.stopAudio_API()}>
                      <Icon
                        style={{textAlign: 'center'}}
                        name="md-pause"
                        size={30}
                        color="#333"
                      />
                      <Text>Matikan</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => this.playAudio_API()}>
                      <Icon
                        style={{textAlign: 'center'}}
                        name="md-play"
                        size={30}
                        color="#333"
                      />
                      <Text>Dengarkan</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>

              <View style={tabTool}>
                <TouchableOpacity onPress={() => this.handleTranslate()}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="md-checkbox"
                    size={30}
                    color={!this.state.translate ? '#333' : '#2452f7a1'}
                  />
                  <Text>Terjemahkan</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{height: 10, backgroundColor: 'rgb(237, 241, 247)'}} />

            {mapDataDetail}

            <RBSheet
              ref={(ref) => {
                this.RBSheet = ref;
              }}
              height={300}
              openDuration={250}
              closeOnDragDown={true}
              closeOnPressMask={true}
              customStyles={styleBottomSheet}>
              <View style={{padding: 20}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 10}}>
                  Bagikan ke Twitter
                </Text>
                <Text>Bagikanlah walau hanya satu ayat.</Text>

                <View style={{marginTop: 20}}>
                  <TouchableOpacity
                    style={btnShare}
                    onPress={() => this.shareAyat()}>
                    <View>
                      <Text style={titleButton}>
                        Bagikan ayat ke {this.state.nomor}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={btnShare}
                    onPress={() => this.shareTerjemahan()}>
                    <View>
                      <Text style={titleButton}>
                        Bagikan terjemahan ke {this.state.nomor}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </RBSheet>
          </ScrollView>
        )}
      </>
    );
  }
}

const cardTranslate = {marginTop: 20};
const titleSurah = {fontWeight: 'bold', fontSize: 24, marginRight: 15};
const titleNumber = {color: '#fff', fontWeight: 'bold'};
const titleButton = {
  textAlign: 'center',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
};
const btnShare = {
  backgroundColor: '#466cd6',
  padding: 20,
  borderRadius: 4,
  marginBottom: 10,
};
const tabTool = {
  width: '50%',
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
};

const numberSurah = {
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#2452f7a1',
  height: 35,
  width: 35,
};

const container = {padding: 20, marginTop: 5, marginBottom: 5};

const grid = {flexDirection: 'row', justifyContent: 'space-between'};

const styleBottomSheet = {
  container: {
    padding: 0,
  },
  wrapper: {
    backgroundColor: '#00000061',
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
};
export default Detail;
