/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-reanimated-carousel';
import {SpecialOfferProps} from '../../libs/interfaces';

interface SlideCaroselProps {
  data: SpecialOfferProps['data'];
}
const renderItem = ({
  item,
}: {
  item: {
    id: number;
    discount: number;
    discountTitle: string;
    discountInfo: string;
    thumbnail: string;
  };
}) => (
  <View>
    <Text style={{textAlign: 'center', fontSize: 30}}>{item.id}</Text>
    <Image style={{height: 70, width: 70}} source={item.thumbnail} />
  </View>
);
export default function SlideCarosel({data}: SlideCaroselProps) {
  const width = Dimensions.get('window').width;
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    console.log('hello', index);
  };
  return (
    <View style={{flex: 1}}>
      <Carousel
        onSnapToItem={index => handleSlideChange(index)}
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={9000}
        // autoPlayInterval={9000}
        renderItem={renderItem}
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              activeSlide === index && styles.indicatorActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  indicator: {
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  indicatorActive: {
    backgroundColor: 'red',
  },
});
