/* eslint-disable prettier/prettier */
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {MostPopularProps} from '../../libs/interfaces';
import {COLORS, SIZES} from '../../libs/theme';

export default function MostPopular({data, title, btnLabel}: MostPopularProps) {
  const [clciked, setClicked] = useState<number>(0);
  const handlePress = (item: number) => {
    setClicked(item);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.title}>{btnLabel}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item}
        horizontal={true}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => handlePress(index)}
              style={[
                styles.itemContainer,
                clciked === index && styles.active,
              ]}>
              <Text style={styles.item}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
    marginHorizontal: 11,
  },
  title: {
    fontSize: SIZES.h5,
    fontFamily: 'Raleway-Bold',
  },
  itemContainer: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderColor: COLORS.lightGrey,
    width: 90,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  item: {
    fontFamily: 'Raleway-Bold',
  },
  active: {
    backgroundColor: COLORS.Vulcan,
  },
});
