/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import {ProductsType} from '@/libs/interfaces';
import {COLORS, SIZES} from '@/libs/theme';

const Product = ({title, image, price, rating}: ProductsType) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title.slice(0, 18)}</Text>
      <Text style={styles.favourite}>
        <Icons name="hearto" size={25} />
      </Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    height: '80%',
    width: '100%',
    borderRadius: 11,
  },
  title: {
    fontSize: SIZES.h5,
    fontFamily: 'Raleway-Bold',
  },
  favourite: {
    position: 'absolute',
    top: 0,
    right: 3,
  },
});
