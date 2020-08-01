import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Route from './routes/route';
import {third} from './color/color';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={third}
        hidden={false}
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Route />
    </NavigationContainer>
  );
};

export default App;
