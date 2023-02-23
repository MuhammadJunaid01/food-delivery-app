import api from '@/libs/api';
import {ProductsType} from '@/libs/interfaces';
import {COLORS, SIZES} from '@/libs/theme';
import Product from '@/ui/product';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Products = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await api.get('/products');
      if (!res.data) {
        throw new Error('something went wrong!');
      }
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
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
    height: 260,
    backgroundColor: COLORS.Vulcan,
    flexBasis: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 11,
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
});
