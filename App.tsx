/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
