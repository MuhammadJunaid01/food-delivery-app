/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {CategoriesProps} from '../../libs/interfaces';
import {FlatList} from 'react-native';
import {COLORS, SIZES} from '../../libs/theme';

const Categories = ({data}: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={{alignItems: 'center'}}>
              <View style={styles.categories}>
                <Image style={styles.icon} source={item.icon} />
              </View>
              <Text style={styles.title}>{item.label}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
        horizontal={false}
        numColumns={4}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    overflow: 'hidden',
    paddingVertical: 20,
  },
  categories: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    margin: 20,
    borderRadius: 50,
  },
  icon: {
    height: 45,
    width: 45,
  },
  title: {
    fontSize: SIZES.h4,
    marginTop: -6,
    fontFamily: 'Raleway-Bold',
  },
});
