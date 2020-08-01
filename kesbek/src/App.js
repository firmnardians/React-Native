import React from 'react';
import {View, StatusBar} from 'react-native';
import {Home} from './pages/index';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#525252'}}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#00000073"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Home />
    </View>
  );
};

export default App;
