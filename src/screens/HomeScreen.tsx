/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';

import Products from '@/ui/products';
import AppBar from '@/ui/appBar';
import SpecialOffer from '@/ui/specialOffer';
import {categories, mostPopularData, specialOfferData} from '@/libs/data';
import Categories from '@/ui/categories';
import MostPopular from '@/ui/mosPopular';
import {COLORS} from '@/libs/theme';

const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor: COLORS.dark, flex: 1}}>
      <View style={[styles.container]}>
        <AppBar />
        <SpecialOffer
          title="Special Offers"
          btnLabel="See All"
          data={specialOfferData}
        />

        <Categories data={categories} />
        <MostPopular
          data={mostPopularData}
          title="Most Popular"
          btnLabel="See All"
        />
        <Products />
      </View>
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
