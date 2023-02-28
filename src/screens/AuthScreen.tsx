import LoginForm from '@/ui/login';
import PhoneAuthenTication from '@/ui/phoneAuthentication';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {white_color} from '../../libs/colors';
import {COLORS} from '../../libs/theme';

export default function AuthScreen({}) {
  const [isLoging, setIsLoging] = useState<boolean>(false);
  const [isPhoneAuth, setIsPhoneAuth] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcome {isLoging && 'back'} </Text>
      <View style={[isPhoneAuth ? {} : styles.auth]}>
        {/* <Button title="Google Sign-In" onPress={} /> */}
        {/* <TextInput
          style={{backgroundColor: 'gray'}}
          value={code}
          onChangeText={text => setCode(text)}
        />
        <Button title="Confirm Code" onPress={() => confirmCode()} /> */}
        {isPhoneAuth ? <PhoneAuthenTication /> : <LoginForm />}
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
  auth: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  headingText: {
    fontSize: 65,
    fontFamily: 'Raleway-ExtraBold',
    textAlign: 'center',
    lineHeight: 62,
    color: white_color,
    marginTop: 80,
    justifyContent: 'center',
  },
});
