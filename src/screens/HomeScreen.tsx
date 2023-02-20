/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../libs/theme';
import AppBar from '../../ui/appBar';
import SpecialOffer from '../../ui/specialOffer';
import {categories, specialOfferData} from '../../libs/data';
import Categories from '../../ui/categories';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: COLORS.dark}}>
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
    </View>
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
  openDrawr: {
    position: 'absolute',
    top: 30,
    left: 0,
  },
});
export default HomeScreen;
