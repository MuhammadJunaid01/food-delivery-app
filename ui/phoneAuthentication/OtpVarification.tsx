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
  const {setCode} = useAuth();
  const handleConfirm = (value: string, index: number): void => {
    setCode(confirmCode => {
      const newInputValues = [...confirmCode];
      newInputValues[index] = value;
      return newInputValues.join('');
    });
  };

  return (
    <View>
      <View style={styles.container}>
        {new Array(6).fill(null).map((_, index) => {
          return (
            <View key={index}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={text => handleConfirm(text, index)}
                maxLength={1}
              />
            </View>
          );
        })}
      </View>
      <Image
        style={styles.image}
        source={require('../../src/assets/images/confirm.png')}
      />
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Confirm Code</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.resend}>Re-send code?</Text>
      </Pressable>
      <Pressable>
        <Text style={[styles.resend, {marginTop: 5}]}>Change number?</Text>
      </Pressable>
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
    fontSize: 19,
    fontFamily: 'Raleway-Bold',
    paddingHorizontal: 6,
    width: 37,
    height: 49,
  },
  image: {height: 300, width: 350, marginLeft: 42},
  btn: {
    position: 'absolute',
    bottom: 50,
    left: 17,
    backgroundColor: COLORS.BlueViolet,
    width: '88%',
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: 7,
  },
  btnText: {fontSize: 17, fontFamily: 'Raleway-Bold'},
  resend: {
    textAlign: 'center',
    fontFamily: 'Raleway-BoldItalic',
    fontSize: 17,
    color: COLORS.white,
  },
});
