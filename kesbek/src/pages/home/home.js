import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Jumbotron from '../../components/jumbotron/jumbotron';
import Header from '../../components/header/header';
import {
  ButtonPrimary,
  ButttonPrimaryDisable,
} from '../../components//button/buttonPrimary';
import Result from '../../components/result/result';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      normal: '25000',
      persen: '30',
      max: '10000',

      result: {
        cashback: '',
        totalPayment: '',
        beforePrice: '',
      },
    };
  }

  handleNormal = (text) => {
    const re = /^[0-9\b]+$/;
    if (text === '' || re.test(text))
      this.setState({
        normal: text,
      });
  };

  handlePersen = (text) => {
    const re = /^[0-9\b]+$/;
    if (text === '' || re.test(text))
      this.setState({
        persen: text,
      });
  };

  handleMax = (text) => {
    const re = /^[0-9\b]+$/;
    if (text === '' || re.test(text))
      this.setState({
        max: text,
      });
  };

  handleSubmit = () => {
    const {normal, persen, max} = this.state;

    let discount = (normal * persen) / 100; // menghitung diskon persen
    let cashback = normal - discount; // menghitung cashback dari diskon
    let totalPayment = normal - max; // total bayar jika maksimal cashback lebih besar dari diskon
    this.RBSheet.open();
    if (max < discount) {
      this.setState({
        result: {
          cashback: max,
          totalPayment: totalPayment,
          beforePrice: normal,
        },
      });
    } else {
      this.setState({
        result: {
          cashback: discount,
          totalPayment: cashback,
          beforePrice: normal,
        },
      });
    }
  };

  render() {
    console.disableYellowBox = true;
    const {normal, persen, max} = this.state;
    const {cashback, totalPayment, beforePrice} = this.state.result;

    let buttonSubmit;
    if (normal.length >= 3 && persen.length > 0 && max.length >= 3) {
      buttonSubmit = <ButtonPrimary handleSubmit={this.handleSubmit} />;
    } else {
      buttonSubmit = <ButttonPrimaryDisable />;
    }
    return (
      <>
        <Header />
        <View style={{flex: 1, backgroundColor: '#222831c9'}}>
          <View style={{backgroundColor: '#222831', height: 0}}></View>
          <View style={{padding: 0}}>
            <Jumbotron
              max={max}
              persen={persen}
              normal={normal}
              handleNormal={this.handleNormal}
              handlePersen={this.handlePersen}
              handleMax={this.handleMax}
            />
          </View>
          <RBSheet
            ref={(ref) => {
              this.RBSheet = ref;
            }}
            closeOnDragDown={true}
            height={350}
            duration={250}
            customStyles={{
              wrapper: {
                backgroundColor: '#00000073',
              },
              container: {
                backgroundColor: '#222831',
                borderRadius: 12,
                padding: 10,
                paddingLeft: 15,
                elevation: 10,
                paddingRight: 15,
              },
            }}>
            <Result
              cashback={cashback}
              totalPayment={totalPayment}
              beforePrice={beforePrice}
              closeButton={() => this.RBSheet.close()}
            />
          </RBSheet>
        </View>
        <View style={{backgroundColor: '#222831c9'}}>{buttonSubmit}</View>
      </>
    );
  }
}

export default Home;
