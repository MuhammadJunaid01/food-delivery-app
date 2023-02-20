/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SpecialOfferProps} from '../../libs/interfaces';
import {COLORS, SIZES} from '../../libs/theme';
import SlideCarosel from '../carousel';

export default function SpecialOffer({
  title,
  btnLabel,
  data,
}: SpecialOfferProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titileBox}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text>{btnLabel}</Text>
        </TouchableOpacity>
      </View>
      <SlideCarosel data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  titileBox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.h1,
    fontFamily: 'Raleway-Bold',
  },
});
