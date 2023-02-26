import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {white_color} from '../../libs/colors';
import {COLORS} from '../../libs/theme';

export default function LoginScreen({}) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1002288922657-h8njnt16hluc07iuro3kv2h81qq6jlpi.apps.googleusercontent.com',
      offlineAccess: false,
    });
  }, []);
  // const signWithGoogle = async () => {
  //   const {idToken} = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   auth()
  //     .signInWithCredential(googleCredential)
  //     .then(user => {
  //       console.log('HEY USER!', user);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  const [confirm, setConfirm] = useState<any>('');
  const [code, setCode] = useState('');
  const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState<any>();
  function onAuthStateChanged(user: any) {
    console.log('user', user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
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

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+8801634900664')}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcome back</Text>
      <View style={styles.login}>
        {/* <Button title="Google Sign-In" onPress={} /> */}
        <TextInput
          style={{backgroundColor: 'gray'}}
          value={code}
          onChangeText={text => setCode(text)}
        />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
        {/* <LoginForm /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    overflow: 'hidden',
  },
  login: {
    // height: 600,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  headingText: {
    fontSize: 65,
    // fontWeight: '800',
    fontFamily: 'Raleway-ExtraBold',
    textAlign: 'center',
    lineHeight: 62,
    color: white_color,
    marginTop: 80,
  },
});
