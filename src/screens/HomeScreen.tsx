import {categories, mostPopularData, specialOfferData} from '@/libs/data';
import {COLORS} from '@/libs/theme';
import AppBar from '@/ui/appBar';
import Categories from '@/ui/categories';
import MostPopular from '@/ui/mosPopular';
import Products from '@/ui/products';
import SpecialOffer from '@/ui/specialOffer';
import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor: COLORS.dark, flex: 1}}>
      <StatusBar backgroundColor={COLORS.dark} />
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
