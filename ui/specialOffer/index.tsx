import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
          <Text style={styles.title}>{btnLabel}</Text>
        </TouchableOpacity>
      </View>
      <SlideCarosel data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  titileBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.h5,
    fontFamily: 'Raleway-Bold',
  },
});
