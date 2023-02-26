import useAuth from '@/libs/hooks/useAuth';
import {RootStackParamList} from '@/libs/interfaces';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ContactScreen from '../screens/ContactScreen';
import DetailsScreen from '../screens/DetailsScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
const Stack = createStackNavigator<RootStackParamList>();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};
export default function MainNavigator() {
  const {isLogedIn} = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen
        name="Home"
        component={isLogedIn ? HomeScreen : GetStartedScreen}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {ContactStackNavigator};
