/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../libs/theme';
import AppBar from '../../ui/appBar';
import SpecialOffer from '../../ui/specialOffer';
import {specialOfferData} from '../../libs/data';

const HomeScreen = () => {
  return (
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
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
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
