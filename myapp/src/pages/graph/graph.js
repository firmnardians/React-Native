import React, {Component} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import Header from '../../components/header';
import Styles from '../../assets/css/style';
import axios from 'axios';
import moment from 'moment';

const baseURL = 'https://indonesia-covid-19.mathdro.id/api';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rounded: false,
      refreshing: false,
      indonesia: {
        jumlahKasus: '',
        sembuh: '',
        perawatan: '',
        meninggal: '',
      },
      dailyNews: [],
    };
  }

  getIndonesia_API = () => {
    axios.get(`${baseURL}`).then(res => {
      const dataRes = res.data;
      this.setState({
        indonesia: {
          jumlahKasus: dataRes.jumlahKasus,
          sembuh: dataRes.sembuh,
          perawatan: dataRes.perawatan,
          meninggal: dataRes.meninggal,
        },
        refreshing: false,
      });
    });
  };

  dailyIndonesia_API = () => {
    axios.get(`${baseURL}/harian`).then(res => {
      // console.log(res.data);
      this.setState({
        dailyNews: res.data.data,
      });
    });
  };

  _onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    this.getIndonesia_API();
  };

  handleScroll = event => {
    if (event.nativeEvent.contentOffset.y) {
      this.setState({
        rounded: true,
      });
    } else if (event.nativeEvent.contentOffset.y <= 5) {
      this.setState({
        rounded: false,
      });
    }
  };

  componentDidMount() {
    this.getIndonesia_API();
    this.dailyIndonesia_API();
  }
  render() {
    const {dailyNews} = this.state;

    // utcString = moment().startOf(getDateIndo).fromNow();

    const mapDailyNews = [...dailyNews].reverse().map(item => {
      const getDateIndo = item.tanggal;
      const utcString = moment(getDateIndo).format('DD MMMM YYYY');
      const dirawat = item.jumlahKasusDirawatperHari;
      const sembuh = item.jumlahKasusSembuhperHari;
      const meninggal = item.jumlahKasusMeninggalperHari;
      return (
        <View key={item.fid} style={Styles.daily_news}>
          <Text>{utcString}</Text>
          <View style={Styles.marginTop20}>
            <View style={Styles.row}>
              <View style={Styles.grid}>
                <Text style={{...Styles.color_perawatan, ...Styles.fontBold}}>
                  {dirawat}
                </Text>
                <Text style={{...Styles.color_perawatan, ...Styles.fontBold}}>
                  Dirawat
                </Text>
              </View>
              <View style={Styles.grid}>
                <Text style={{...Styles.color_sembuh, ...Styles.fontBold}}>
                  {sembuh}
                </Text>
                <Text style={{...Styles.color_sembuh, ...Styles.fontBold}}>
                  Sembuh
                </Text>
              </View>
              <View style={Styles.grid}>
                <Text style={{...Styles.color_meninggal, ...Styles.fontBold}}>
                  {meninggal}
                </Text>
                <Text style={{...Styles.color_meninggal, ...Styles.fontBold}}>
                  Meninggal
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    });

    return (
      <>
        <Header settings={() => this.props.navigation.navigate('Setting')} />
        <ScrollView
          onScroll={this.handleScroll}
          style={Styles.body_purple}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={Styles.content_app}>
            <Text style={{...Styles.content_title, ...Styles.color_white}}>
              Data Indonesia
            </Text>
            <Text style={{...Styles.color_white, ...Styles.fontBold}}>
              Jumlah data di Indonesia saat ini.
            </Text>

            <View
              style={{...Styles.card_graph_info_full, ...Styles.jumlahKasus}}>
              <Text style={{...Styles.color_white, ...Styles.fontBold}}>
                Positif
              </Text>
              <Text style={Styles.number_graph}>
                {this.state.indonesia.jumlahKasus}
              </Text>
            </View>

            <View style={Styles.row}>
              <View style={Styles.grid}>
                <View style={{...Styles.card_graph_info, ...Styles.sembuh}}>
                  <Text style={{...Styles.color_white, ...Styles.fontBold}}>
                    Sembuh
                  </Text>
                  <Text style={Styles.number_graph}>
                    {this.state.indonesia.sembuh}
                  </Text>
                </View>
              </View>
              <View style={Styles.grid}>
                <View style={{...Styles.card_graph_info, ...Styles.meninggal}}>
                  <Text style={{...Styles.color_white, ...Styles.fontBold}}>
                    Meninggal
                  </Text>
                  <Text style={Styles.number_graph}>
                    {this.state.indonesia.meninggal}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{...Styles.card_graph_info_full, ...Styles.perawatan}}>
              <Text style={{...Styles.color_white, ...Styles.fontBold}}>
                Perawatan
              </Text>
              <Text style={Styles.number_graph}>
                {this.state.indonesia.perawatan}
              </Text>
            </View>
          </View>
          <View
            style={
              !this.state.rounded
                ? Styles.card_graph_rounded
                : Styles.card_graph_normal
            }>
            <Text style={Styles.content_title}>Kasus Harian</Text>
            <Text style={Styles.fontBold}>
              Kasus terbaru Covid-19 di Indonesia.
            </Text>

            {mapDailyNews}
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Graph;
