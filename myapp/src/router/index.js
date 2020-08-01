import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Splash, Home, Graph, Setting} from '../pages';

const HomeStack = createStackNavigator();
const GraphStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

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

const GraphStackScreen = () => {
  return (
    <GraphStack.Navigator>
      <GraphStack.Screen
        name="Graph"
        component={Graph}
        options={{headerShown: false}}
      />
    </GraphStack.Navigator>
  );
};

const TabApp = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#473f97',
        swipeEnabled: true,
        animationEnabled: true,
        inactiveTintColor: '#50499c57',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 0,
        },
        style: {
          height: 60,
          paddingTop: 5,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="md-home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Graph"
        component={GraphStackScreen}
        options={{
          tabBarLabel: 'Statistic',
          tabBarIcon: ({color}) => (
            <Icon name="md-list-box" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabApp}
        options={{
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          gestureEnabled: true,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
