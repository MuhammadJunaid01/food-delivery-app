/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable prettier/prettier */
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ProductsType} from '@/libs/interfaces';
import Product from '@/ui/product';
import {COLORS, SIZES} from '@/libs/theme';

const Products = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let count = products?.length / 5;
  const getProducts = () => {
    setIsLoading(true);
    const url: string = 'https://fakestoreapi.com/products';
    axios.get(url).then(res => {
      setProducts(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <View style={{alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.container}>
        {products?.map((product, index) => {
          return (
            <View style={styles.item} key={index}>
              <Product {...product} />
            </View>
          );
        })}
      </View>
      <View style={styles.pagination}>
        {/* {products?.map((_, index) => {
          return (
            <View key={index}>
              <Text>{Math.floor(index / 5)}</Text>
            </View>
          );
        })} */}
        {new Array(products?.length / 4).fill(0).map((item, index) => (
          <Text key={index}>{index}</Text>
        ))}
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    // marginLeft: 13,
    marginTop: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    height: 150,
    backgroundColor: COLORS.Vulcan,
    flexBasis: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 11,
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  pagination: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
