/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {primary_color} from '../../libs/colors';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ContactScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary_color,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 30,
    color: 'white',
  },
});
