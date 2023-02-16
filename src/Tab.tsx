/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Icons from 'react-native-vector-icons/AntDesign';
import {StyleSheet, Text} from 'react-native';
import GetStartedScreen from './screens/GetStartedScreen';
import LoginScreen from './screens/LoginScreen';
import {primary_color} from '../libs/colors';
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="GetStarted"
      screenOptions={{tabBarStyle: styles.tabBarStyle}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons name="home" size={30} color={focused ? 'red' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="GetStarted"
        component={GetStartedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons name="setting" size={30} color={focused ? 'red' : 'black'} />
          ),
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons name="setting" size={30} color={focused ? 'red' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {backgroundColor: primary_color},
          headerLeft: () => (
            <Text style={{color: 'red'}}>this is back button</Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icons name="setting" size={30} color={focused ? 'red' : 'black'} />
          ),
          tabBarStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default Tabs;
