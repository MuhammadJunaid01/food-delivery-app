/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProductsType} from '@/libs/interfaces';

const Product = ({title, image, price, rating}: ProductsType) => {
  return (
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
