/* eslint-disable react-native/no-inline-styles */
import useAuth from '@/libs/hooks/useAuth';
import {COLORS, SIZES} from '@/libs/theme';
import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import OtpVerification from './OtpVarification';

const PhoneAuthenTication = () => {
  const validDurationTime = 2 * 60 * 1000; // 2 minutes in milliseconds
  const [phoneNumber, setPhoneNumber] = useState<any>(null);
  const {signInWithPhoneNumber, confirmId} = useAuth();

  const handleLogin = (phoneumber: string, DurationTime: number) => {
    console.log('handleLogin', phoneumber, DurationTime);
    signInWithPhoneNumber(phoneumber);
  };

  if (confirmId) {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <PhoneInput
            containerStyle={styles.inputContainer}
            defaultCode="BD"
            withShadow={true}
            onChangeFormattedText={text => {
              setPhoneNumber(text);
            }}
            textInputStyle={{
              color: COLORS.white,
              fontFamily: 'Raleway-Bold',
            }}
            codeTextStyle={{color: COLORS.white}}
            textContainerStyle={{
              backgroundColor: COLORS.Vulcan,
            }}
            autoFocus
          />
        </KeyboardAvoidingView>
        <Image
          style={{height: 380, width: 350}}
          source={require('../../src/assets/images/login.png')}
        />
        <Pressable
          onPress={() => handleLogin(phoneNumber, validDurationTime)}
          style={styles.btn}>
          <Text style={{fontSize: 18, fontFamily: 'Raleway-ExtraBold'}}>
            Login
          </Text>
        </Pressable>
      </View>
    );
  }
  return <OtpVerification />;
};

export default PhoneAuthenTication;

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
    borderRadius: 11,
    width: SIZES.width,
    // left: 27,
    height: SIZES.height,
    backgroundColor: COLORS.Vulcan,
  },
  btn: {
    width: '90%',
    marginLeft: 17,
    backgroundColor: COLORS.BlueViolet,
    paddingVertical: 13,
    alignItems: 'center',
    borderRadius: 10,
  },
  inputContainer: {
    width: '95%',
    borderRadius: 5,
    backgroundColor: COLORS.Vulcan,
    marginLeft: 8,
    padding: 0,
  },
});
