/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../libs/theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    backgroundColor: COLORS.dark,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    color: COLORS.white,
  },
  openDrawr: {
    position: 'absolute',
    top: 30,
    left: 0,
  },
});
export default HomeScreen;
