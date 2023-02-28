/* eslint-disable react-native/no-inline-styles */
import useAuth from '@/libs/hooks/useAuth';
import {COLORS} from '@/libs/theme';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const OtpVerification = () => {
  const {code, setCode} = useAuth();
  console.log('code', code);
  return (
    <View>
      <View>
        <View style={styles.container}>
          {new Array(6).fill(null).map((item, index) => {
            return (
              <View key={index}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="numeric"
                  onChangeText={text => setCode(text)}
                />
              </View>
            );
          })}
        </View>
        <Image
          style={{height: 380, width: 350, marginLeft: 42}}
          source={require('../../src/assets/images/confirm.png')}
        />
        <Pressable style={styles.btn}>
          <Text style={{fontSize: 17, fontFamily: 'Raleway-Bold'}}>
            Confirm Code
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    position: 'relative',
    marginTop: 50,
  },
  textInput: {
    backgroundColor: COLORS.Vulcan,
    borderColor: COLORS.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    color: COLORS.white,
  },
  btn: {
    position: 'absolute',
    bottom: 35,
    left: 28,
    backgroundColor: COLORS.BlueViolet,
    width: '88%',
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: 7,
  },
});
