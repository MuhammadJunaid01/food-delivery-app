import api from '@/libs/api';
import {ProductsType} from '@/libs/interfaces';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Details = ({id}: {id: number}) => {
  const [product, setProduct] = useState<ProductsType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
