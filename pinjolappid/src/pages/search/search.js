import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {opacity, secondary, third} from '../../color/color';
import moment from 'moment';
import 'moment/locale/id';

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      errorMessage: '',
      data: [],
    };
  }

  getData_API = async () => {
    const baseURL = fetch('https://pinjollist.now.sh/api/companies');

    await baseURL
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        if (res.status === 'ok') {
          this.setState({
            data: res.data,
          });
        } else if (res.status === 'error') {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData_API();
  }

  render() {
    console.disableYellowBox = true;
    moment.locale('id');
    const {search, errorMessage, data} = this.state;

    const getDate1 = moment.unix(1499299200).format('MM/DD/YYYY');
    const dateDummy1 = moment(getDate1, 'MMDDYYYY').fromNow();

    const getDate2 = moment.unix(1521504000).format('MM/DD/YYYY');
    const dateDummy2 = moment(getDate2, 'MMDDYYYY').fromNow();

    const mapResultData = data
      .filter((item) => {
        if (search === null) {
          return item;
        } else if (
          item.platform_name
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          item.company_name
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        ) {
          return item;
        }
      })
      .map((items, index) => {
        const getDate = moment
          .unix(items.registered_at._seconds)
          .format('MMDDYYYY');
        const newDate = moment(getDate, 'MMDDYYYY').fromNow();

        const params = {
          name: items.platform_name,
          perusahaan: items.company_name,
          register: items.registration,
          website: items.website,
          type: items.registration_type,
          hukum: items.badan_hukum,
          syariah: items.is_syariah,
          alamat: items.alamat,
          date: newDate,
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={() => this.props.navigation.navigate('Detail', params)}>
            <CardResult
              name={items.platform_name}
              company={items.company_name}
            />
          </TouchableOpacity>
        );
      });
    return (
      <View style={container}>
        <View style={inputGroup}>
          <Icon
            style={iconStyle}
            name="md-search"
            size={24}
            color={secondary}
          />
          <TextInput
            style={inputStyle}
            placeholder="Telusuri..."
            autoFocus={true}
            value={search}
            onChangeText={(text) => this.setState({search: text})}
            placeholderTextColor={opacity}
          />
        </View>
        <ScrollView style={{backgroundColor: third}}>
          {search.length >= 2 ? (
            <View style={cardResult}>
              <Text style={textSugest}>Hasil pencarian</Text>
              <View style={containerResult}>
                {/*  */}
                {mapResultData}
                {/*  */}
              </View>
            </View>
          ) : (
            <View style={cardResult}>
              <Text style={textSugest}>Rekomendasi pencarian</Text>
              <View style={containerResult}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      name: 'Danamas',
                      perusahaan: 'PT Pasar Dana Pinjaman',
                      register: 'KEP-49/D.05/2017',
                      website: 'https://p2p.danamas.co.id',
                      type: 'Berizin',
                      hukum: 'PT',
                      syariah: false,
                      alamat:
                        'Sinarmas Land Plaza menara 1 Lt.9, Jl. MH. Thamrin no.51, Menteng, Gondangdia, Jakarta Pusat 10350. Telp. (021) 392 5660',
                      date: dateDummy1,
                    })
                  }>
                  <CardResult name="Danamas" company="PT Pasar Dana Pinjaman" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      name: 'Kredivo',
                      perusahaan: 'PT FinAccel Digital Indonesia',
                      register: 'S-236/NB.213/2018',
                      website: 'https://www.kredivo.id',
                      type: 'Terdaftar',
                      hukum: 'PT',
                      syariah: false,
                      alamat:
                        'Ruko Permata Senayan E-53 No.21, Jl. Tentara Pelajar, RT.1/RW.7, Grogol Utara, Kby. Lama, Daerah Khusus Ibukota Jakarta 12210. Telp. 0855-7467-9098',
                      date: dateDummy2,
                    })
                  }>
                  <CardResult
                    name="Kredivo"
                    company="PT FinAccel Digital Indonesia"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

export const CardResult = (props) => {
  return (
    <View style={cardDataResult}>
      <Text style={titleDataResult}>{props.name}</Text>
      <Text style={subtitleDataResult}>{props.company}</Text>
    </View>
  );
};

const inputStyle = {
  fontSize: 16,
  width: '100%',
  color: '#fff',
  paddingLeft: 10,
  paddingRight: 10,
};
const iconStyle = {
  height: 35,
  width: 36,
  marginTop: 11,
  marginRight: 0,
  fontWeight: 'bold',
  textAlign: 'center',
};
const inputGroup = {
  flexDirection: 'row',
  borderBottomColor: opacity,
  borderBottomWidth: 1,
  marginLeft: 5,
  marginRight: 5,
};

const container = {
  backgroundColor: third,
  flex: 1,
  padding: 10,
  paddingBottom: 0,
  paddingTop: 20,
};

const containerResult = {marginTop: 20};

const cardResult = {
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 25,
  paddingBottom: 25,
};

const textSugest = {color: '#fff', fontSize: 20, fontWeight: 'bold'};

const cardDataResult = {
  backgroundColor: '#333',
  padding: 15,
  borderRadius: 6,
  marginBottom: 10,
};

const titleDataResult = {color: '#fff', fontWeight: 'bold', fontSize: 18};

const subtitleDataResult = {fontSize: 14, color: opacity};
export default search;
