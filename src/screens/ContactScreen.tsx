import {primary_color} from '@/libs/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
