/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainNavigator, {ContactStackNavigator} from './MainNavigator';
import useAuth from '../../libs/hooks/useAuth';
import Icons from 'react-native-vector-icons/AntDesign';
import {gray_100, primary_color} from '../../libs/colors';
import {COLORS} from '../../libs/theme';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const {isLogedIn} = useAuth();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={MainNavigator}
        options={{
          tabBarStyle: isLogedIn
            ? {backgroundColor: COLORS.dark, paddingHorizontal: 10, height: 50}
            : {display: 'none'},
          tabBarIcon: ({focused}) => (
            <Icons
              name="home"
              size={30}
              color={focused ? primary_color : gray_100}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="See"
        component={ContactStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons
              name="user"
              size={30}
              color={focused ? primary_color : gray_100}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
