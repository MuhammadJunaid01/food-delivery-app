/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../libs/theme';

const RenderItem = ({
  item,
}: {
  item: {
    id: number;
    discount: number;
    discountTitle: string;
    discountInfo: string;
    thumbnail: string;
  };
}) => {
  return (
    <View style={styles.renderItem}>
      <View style={styles.info}>
        <Text style={styles.discount}>{item.discount} %</Text>
        <Text style={styles.discountTite}>{item.discountTitle}</Text>
        <Text style={styles.discountInfo}>{item.discountInfo}</Text>
      </View>
      <Image style={styles.image} source={item.thumbnail} resizeMode="cover" />
    </View>
  );
};
export default RenderItem;
const styles = StyleSheet.create({
  renderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    width: SIZES.width - 20,
    overflow: 'hidden',
  },
  info: {
    width: SIZES.width / 2.3,
    alignItems: 'center',
  },
  discount: {
    fontSize: 40,
    fontFamily: 'Raleway-Bold',
    color: COLORS.white,
  },
  discountTite: {
    fontSize: SIZES.h2,
    color: COLORS.white,
    marginVertical: 6,
  },
  discountInfo: {
    fontSize: SIZES.h4,
    color: COLORS.white,
    lineHeight: 22,
    marginBottom: 16,
  },
  image: {
    width: SIZES.width / 1.7,
    height: 200,
    marginBottom: -50,
  },
});
