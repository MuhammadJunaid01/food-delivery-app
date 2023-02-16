/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {primary_color} from '../../libs/colors';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>LoginScreen</Text>
    </View>
  );
}
LoginScreen.options = {
  headerStyle: {
    backgroundColor: 'red',
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary_color,
  },
  headingText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'red',
  },
});
