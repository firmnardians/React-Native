import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Home, Detail, Statistic, Search} from '../pages/pages';
import {opacity, primary, secondary} from '../color/color';

const HomeStack = createStackNavigator();
const StatisticStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const StatisticStackScreen = () => {
  return (
    <StatisticStack.Navigator>
      <StatisticStack.Screen
        name="Statistic"
        component={Statistic}
        options={{headerShown: false}}
      />
    </StatisticStack.Navigator>
  );
};

const TabApp = () => {
  return (
    <Tab.Navigator tabBarOptions={settingTab}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <Icon name="md-home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistik"
        component={StatisticStackScreen}
        options={{
          tabBarLabel: 'Statistik',
          tabBarIcon: ({color}) => (
            <Icon name="md-analytics" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({
          title: route.params.name,
          animationEnabled: false,
          headerStyle: {
            backgroundColor: primary,
          },
          headerTintColor: '#ffffff',
        })}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const settingTab = {
  activeTintColor: secondary,
  inactiveTintColor: opacity,
  keyboardHidesTabBar: true,
  labelStyle: {
    fontSize: 12,
    marginTop: 0,
  },
  style: {
    paddingTop: 10,
    height: 55,
    backgroundColor: primary,
    borderTopColor: opacity,
    borderTopWidth: 0.5,
    paddingBottom: 0,
  },
};

export default Route;
