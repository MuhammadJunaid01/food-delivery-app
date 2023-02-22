/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable prettier/prettier */
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ProductsType} from '@/libs/interfaces';
import Product from '@/ui/product';

const Products = () => {
  const [products, setProducts] = useState<ProductsType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      {products?.map((product, index) => {
        return (
          <View key={index}>
            <Product {...product} />
          </View>
        );
      })}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
