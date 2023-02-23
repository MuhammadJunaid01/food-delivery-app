import {SpecialOfferProps} from '@/libs/interfaces';
import {COLORS, SIZES} from '@/libs/theme';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import RenderItem from './RenderItem';

interface SlideCaroselProps {
  data: SpecialOfferProps['data'];
}

export default function SlideCarosel({data}: SlideCaroselProps) {
  const width = Dimensions.get('window').width;
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    console.log('active', activeSlide);
  };
  return (
    <View style={styles.container}>
      <Carousel
        onSnapToItem={index => handleSlideChange(index)}
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={12000}
        autoPlayInterval={12000}
        renderItem={RenderItem}
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
    backgroundColor: COLORS.Vulcan,
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  slide: {
    width: SIZES.width,
    height: 250,
    resizeMode: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -22,
  },
  indicator: {
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: COLORS.grey,
    marginHorizontal: 4,
  },
  indicatorActive: {
    backgroundColor: COLORS.BlueViolet,
    width: 25,
  },
  renderItem: {},
});
