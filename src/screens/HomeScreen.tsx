/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
  },
});
export default HomeScreen;
