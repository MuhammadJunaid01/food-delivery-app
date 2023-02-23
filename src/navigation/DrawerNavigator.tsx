import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {primary_color} from '../../libs/colors';
import DrawerContent from '../../ui/drawer';
import {ContactStackNavigator} from './MainNavigator';
import BottomTabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent children={undefined} {...props} />}
      screenOptions={{
        headerStyle: {backgroundColor: primary_color},
        headerBackgroundContainerStyle: {},
        headerTintColor: 'white',
        headerShown: false,
      }}>
      <Drawer.Screen
        name="HomeDrawer"
        component={BottomTabNavigator}
        options={{headerTitle: ''}}
      />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}
