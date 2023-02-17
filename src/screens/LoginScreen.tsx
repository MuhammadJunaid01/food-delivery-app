/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {primary_color, white_color} from '../../libs/colors';
import LoginForm from '../../ui/login';

export default function LoginScreen({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcome back</Text>
      <View style={styles.login}>
        <LoginForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: primary_color,
    overflow: 'hidden',
  },
  login: {
    // height: 600,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  headingText: {
    fontSize: 65,
    // fontWeight: '800',
    fontFamily: 'Raleway-ExtraBold',
    textAlign: 'center',
    lineHeight: 62,
    color: white_color,
    marginTop: 80,
  },
});
