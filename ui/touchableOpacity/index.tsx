/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TouchableBtnProps} from '../../libs/interfaces';
import {primary_color, white_color} from '../../libs/colors';

export default function TouchableBtn({
  label,
  bgColor,
  color,
  height,
  width,
  padding,
  margin,
  onpress,
}: TouchableBtnProps) {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: bgColor ? bgColor : white_color,
            height: height,
            width: width,
          },
        ]}
        onPress={onpress}>
        <Text style={[styles.label, {color: color ? color : white_color}]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: -155,
    marginLeft: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  label: {
    textAlign: 'center',
    color: primary_color,
    fontSize: 20,
    fontWeight: '600',
  },
});
