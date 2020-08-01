import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../components/header';
import Styles from '../../assets/css/style';
import Jumbotron_home from '../../components/jumbotron_home';
import {ScrollView} from 'react-native-gesture-handler';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rounded: false,
    };
  }
  handleScroll = event => {
    if (event.nativeEvent.contentOffset.y) {
      this.setState({
        rounded: true,
      });
    } else if (event.nativeEvent.contentOffset.y <= 50) {
      this.setState({
        rounded: false,
      });
    }
  };

  render() {
    return (
      <>
        <Header settings={() => this.props.navigation.navigate('Setting')} />
        <ScrollView onScroll={this.handleScroll} style={{flex: 1}}>
          <Jumbotron_home animatRounded={Styles.jumbotron_home} />
          <View style={Styles.content_app}>
            <Text style={Styles.content_title}>Pencegahan</Text>
            <Text>Beberapa tips cara pencegahan.</Text>

            <View style={Styles.row}>
              <View style={Styles.grid}>
                <View style={Styles.preventation}>
                  <Image
                    style={{width: 80, height: 80}}
                    source={require('../../assets/images/distance.png')}
                  />
                </View>
                <Text style={Styles.fontBold}>Jaga Jarak</Text>
              </View>
              <View style={Styles.grid}>
                <View style={Styles.preventation}>
                  <Image
                    style={{width: 80, height: 80}}
                    source={require('../../assets/images/hand-wash.png')}
                  />
                </View>
                <Text style={Styles.fontBold}>Cuci Tangan</Text>
              </View>
              <View style={Styles.grid}>
                <View style={Styles.preventation}>
                  <Image
                    style={{width: 80, height: 80}}
                    source={require('../../assets/images/antivirus.png')}
                  />
                </View>
                <Text style={Styles.fontBold}>Pakai Masker</Text>
              </View>
            </View>

            <View style={Styles.hr} />

            <Text style={Styles.content_title}>Info terbaru</Text>
            <Text>Ulasan info terbaru tentang Covid.</Text>

            <View>
              <View style={Styles.card_info_home}>
                <Text style={Styles.title_info_home}>Test doang</Text>
              </View>
              <View style={Styles.card_info_home}>
                <Text style={Styles.title_info_home}>Test doang</Text>
              </View>
              <View style={Styles.card_info_home}>
                <Text style={Styles.title_info_home}>Test doang</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Home;
