/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {primary_color} from '../../libs/colors';
import SearchBox from '../../ui/searchBox';

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.openDrawr}>
        <SearchBox />
      </Text>
      <Text style={styles.text}>HomeScreen</Text>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary_color,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
  },
  openDrawr: {
    position: 'absolute',
    top: 30,
    left: 0,
  },
});
export default HomeScreen;
