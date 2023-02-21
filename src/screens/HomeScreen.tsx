/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS} from '../../libs/theme';
import AppBar from '../../ui/appBar';
import SpecialOffer from '../../ui/specialOffer';
import {categories, mostPopularData, specialOfferData} from '../../libs/data';
import Categories from '../../ui/categories';
import MostPopular from '../../ui/mosPopular';
import Products from '../../ui/products';

const HomeScreen = () => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      scrollEnabled
      style={{backgroundColor: COLORS.dark, flex: 1}}>
      <SafeAreaView />
      <ScrollView>
        <View style={styles.container}>
          <AppBar />
          <SpecialOffer
            title="Special Offers"
            btnLabel="See All"
            data={specialOfferData}
          />
        </View>
      </ScrollView>
      <Categories data={categories} />
      <MostPopular
        data={mostPopularData}
        title="Most Popular"
        btnLabel="See All"
      />
      <Products />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    color: COLORS.white,
  },
});
export default HomeScreen;
