/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SIZES} from '../../libs/theme';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [viewProducts, setViewProducts] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = () => {
    setIsLoading(true);
    const url: string = 'https://fakestoreapi.com/products';

    axios.get(url).then(res => {
      //setUsers(res.data.results);
      setProducts(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        {/* <Text>{item.image}</Text> */}
        <Image style={{height: 90, width: 90}} source={{uri: item.image}} />
      </View>
    );
  };
  const renderLoader = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  };
  const loadMoreItem = () => {
    console.log('HELLO LOAD MORE ITEM', SIZES.height * 0.32);
  };

  return (
    <View>
      <Text>Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        // ListFooterComponent={renderLoader}
        // onEndReached={loadMoreItem}
        // onEndReachedThreshold={0}
        // showsVerticalScrollIndicator={false}
        // scrollEventThrottle={16}
      />
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
