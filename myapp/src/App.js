import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#473f97"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Router />
    </NavigationContainer>
  );
};

export default App;
