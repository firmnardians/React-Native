import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Detail} from '../pages/pages';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Rehat', headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Detail Surah',
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Route;
