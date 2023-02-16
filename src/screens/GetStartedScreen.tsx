/* eslint-disable prettier/prettier */
import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native';

import {primary_color, white_color} from '../../libs/colors';
import TouchableBtn from '../../ui/touchableOpacity';

const GetStartedScreen = ({navigation}) => {
  const handlePress = () => {
    console.log('clicked');
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Find your Gadget</Text>
      <View>
        <Image
          style={styles.startedLogo}
          source={require('../assets/images/getStarted.png')}
        />
        {/* <Text style={styles.blur} /> */}

        <TouchableBtn
          onpress={handlePress}
          label="Get started"
          bgColor={white_color}
          color={primary_color}
          height={46}
          width={220}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary_color,
  },
  startedLogo: {
    width: 280,
    height: 280,
  },
  blur: {
    backgroundColor: primary_color,
    height: 50,
    opacity: 0.1,
    marginBottom: -70,
  },
  heading: {
    color: 'white',
    fontSize: 55,
    lineHeight: 67,
    fontFamily: 'Raleway-ExtraBold',
    // marginBottom: 15,
    marginTop: -120,
    marginBottom: 15,
  },
  link: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 40,
  },
});
export default GetStartedScreen;
