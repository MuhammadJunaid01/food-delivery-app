/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, SIZES} from '@/libs/theme';
import {useNavigation} from '@react-navigation/native';
const slides = [
  {
    id: 1,
    title: 'Discover Best Places',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../../src/assets/images/appIntro/app-intro-1.jpg'),
  },
  {
    id: 2,
    title: 'Choose A Tasty Dish',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../../src/assets/images/appIntro/app-intro-2.jpg'),
  },
  {
    id: 3,
    title: 'Pick Up The Delivery',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../../src/assets/images/appIntro/app-intro-3.jpg'),
  },
  {
    id: 4,
    title: 'Pick Up The Delivery',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../../src/assets/images/appIntro/app-intro-4.jpg'),
  },
  {
    id: 5,
    title: 'Pick Up The Delivery',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('../../src/assets/images/appIntro/app-intro-5.jpg'),
  },
];
const GetStartedScreen = () => {
  const navigation = useNavigation();
  const buttonLabel = (label: string) => {
    return (
      <View
        style={{
          padding: 12,
        }}>
        <Text
          style={{
            color: COLORS.blue,
            fontWeight: '600',
            fontSize: SIZES.h4,
          }}>
          {label}
        </Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({item}) => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              // paddingTop: 100,
              marginTop: -20,
              backgroundColor: COLORS.dark,
            }}>
            <Image
              source={item.image}
              style={{
                width: SIZES.width,
                height: SIZES.height - 290,
              }}
              // resizeMode="contain"
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: COLORS.white,
                fontSize: SIZES.h1,
                marginTop: 30,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 5,
                color: COLORS.white,
              }}>
              {item.description}
            </Text>
          </View>
        );
      }}
      activeDotStyle={{
        backgroundColor: COLORS.primary,
        width: 30,
      }}
      dotStyle={{backgroundColor: COLORS.grey}}
      showSkipButton
      renderNextButton={() => buttonLabel('Next')}
      renderSkipButton={() => buttonLabel('Skip')}
      renderDoneButton={() => buttonLabel('Done')}
      onDone={() => {
        // setShowHomePage(true);
        console.log('DONE ):');
        navigation.navigate('Login');
      }}
    />
  );
};

export default GetStartedScreen;
