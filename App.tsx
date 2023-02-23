/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import DrawerNavigator from '@/src/navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App;
