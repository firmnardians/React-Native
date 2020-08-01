import {StyleSheet} from 'react-native';

const primaryColor = '#473f97';

export default StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: primaryColor,
    alignItems: 'center',
  },
  splash_title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
  header: {
    padding: 20,
    color: 'white',
    backgroundColor: primaryColor,
  },
  jumbotron_home: {
    paddingBottom: 50,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    backgroundColor: primaryColor,
    padding: 20,
  },

  header_brand: {
    fontSize: 26,
    color: '#fff',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  color_white: {
    color: 'white',
  },
  navbar: {
    height: 54,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  navbar_menu: {
    width: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content_app: {
    flex: 1,
    padding: 20,
  },
  content_title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  grid: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: 'auto',
  },
  preventation: {
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: '#ffe5ee',
  },
  fontBold: {
    fontWeight: 'bold',
  },
  hr: {
    marginTop: 30,
    marginBottom: 30,
    height: 1,
    backgroundColor: '#d1d1d1',
  },
  card_info_home: {
    padding: 20,
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: '#6c65ac',
  },
  title_info_home: {
    color: '#fff',
    fontWeight: 'bold',
  },
  body_purple: {
    backgroundColor: primaryColor,
  },
  card_graph_info_full: {
    padding: 10,
    height: 100,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 6,
    display: 'flex',
    margin: 10,
    justifyContent: 'center',
  },
  card_graph_info: {
    padding: 10,
    width: '90%',
    height: 100,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 6,
    justifyContent: 'center',
  },
  jumlahKasus: {
    backgroundColor: '#639a67',
  },
  sembuh: {
    backgroundColor: '#0779e4',
  },
  meninggal: {
    backgroundColor: '#d8345f',
  },
  perawatan: {
    backgroundColor: '#f2a365',
  },
  color_jumlahKasus: {
    color: '#639a67',
  },
  color_sembuh: {
    color: '#0779e4',
  },
  color_meninggal: {
    color: '#d8345f',
  },
  color_perawatan: {
    color: '#f2a365',
  },
  card_graph_rounded: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 30,
    borderTopEndRadius: 20,
    marginTop: 20,
    borderTopStartRadius: 20,
  },
  card_graph_normal: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 30,
    borderTopEndRadius: 0,
    marginTop: 20,
    borderTopStartRadius: 0,
  },
  number_graph: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
  },
  daily_news: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    borderRadius: 6,
    marginTop: 20,
  },
  marginTop20: {
    marginTop: 20,
  },
});
