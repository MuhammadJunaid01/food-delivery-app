/* eslint-disable react-native/no-inline-styles */
import {SIZES} from '@/libs/theme';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
const PhoneAuthenTication = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1002288922657-h8njnt16hluc07iuro3kv2h81qq6jlpi.apps.googleusercontent.com',
      offlineAccess: false,
    });
  }, []);

  const [confirm, setConfirm] = useState<any>('');
  const [code, setCode] = useState('');

  const [initializing, setInitializing] = useState(true);

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  // const [user, setUser] = useState<any>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in, do something
        console.log('user', user.uid);
      } else {
        // User is signed out, do something else
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);
  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation.verificationId);
  }

  async function confirmCode() {
    console.log('CODE', code);
    try {
      await confirm.confirm(code);
      console.log('confirm', code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  // if (!confirm) {
  //   return (
  //     <Button
  //       title="Phone Number Sign In"
  //       onPress={() => signInWithPhoneNumber('+8801634900664')}
  //     />
  //   );
  // }
  console.log('text', typeof value);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('@/src/assets/images/login.gif')}>
        <KeyboardAvoidingView behavior="padding">
          <PhoneInput
            containerStyle={{
              height: 50,
              width: '95%',
              borderRadius: 5,
              marginTop: 10,
              marginLeft: 8,
            }}
            textContainerStyle={{borderRadius: 5}}
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            withShadow={true}
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme
            autoFocus
          />
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 1,
            paddingVertical: 10,
          }}>
          <Text>Send</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default PhoneAuthenTication;

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
    width: SIZES.width - 50,
    left: 27,
    height: SIZES.height - 300,
  },
});
