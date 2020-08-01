import React from 'react';
import Route from './route/route';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Route />
    </NavigationContainer>
  );
};

export default App;
