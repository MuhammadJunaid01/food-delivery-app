import {ProductsType} from '@/libs/interfaces';
import {COLORS, SIZES} from '@/libs/theme';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

const Product = ({title, image, price, rating, id}: ProductsType) => {
  const navigation = useNavigation();

  const handlePress = (): void => {
    console.log('press');
    navigation.navigate('Details', {
      itemId: id,
    });
  };
  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title.slice(0, 15)}</Text>
      <TouchableOpacity style={styles.favourite}>
        <Icons name="hearto" size={25} />
      </TouchableOpacity>
      <View style={styles.ratingAndPriceBox}>
        <Text style={styles.rate_price}>
          <Icons name="staro" size={18} /> {rating.rate}
        </Text>
        <Text style={styles.rate_price}>${price}</Text>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    marginTop: 17,
    height: 145,
    width: '100%',
    borderRadius: 11,
  },
  title: {
    fontSize: SIZES.h5,
    color: COLORS.white,
    fontFamily: 'Raleway-Bold',
    marginTop: 5,
  },
  favourite: {
    position: 'absolute',
    top: -14,
    right: 0,
  },
  ratingAndPriceBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rate_price: {
    fontSize: SIZES.h3,
    fontFamily: 'Raleway-Bold',
  },
});
