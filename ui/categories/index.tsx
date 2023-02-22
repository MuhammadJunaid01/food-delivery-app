/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {CategoriesProps} from '../../libs/interfaces';
import {FlatList} from 'react-native';
import {COLORS, SIZES} from '../../libs/theme';

const Categories = ({data}: CategoriesProps) => {
  const handlePress = (id: number) => {
    console.log(id);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <SafeAreaView>
        <ScrollView horizontal={true}>
          {data?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(item.id)}
                style={styles.itemBox}>
                <View style={styles.categories}>
                  <Image style={styles.icon} source={item.icon} />
                </View>
                <Text style={styles.title}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    overflow: 'hidden',
    paddingBottom: 15,
    marginTop: 15,
  },
  header: {
    fontFamily: 'Raleway-Bold',
    fontSize: SIZES.h4,
  },
  categories: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 17,
    marginVertical: 10,
    borderRadius: 50,
  },
  itemBox: {
    alignItems: 'center',
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
