import {black_color, gray_100, white_color} from '@/libs/colors';
import {COLORS} from '@/libs/theme';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Fontisto';

export default function LoginForm() {
  const [email, setEmail] = useState('rosina@company.com');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Login</Text>
      <View style={styles.inputContainer}>
        <Text>
          <Icon name="email" size={20} color={gray_100} />
        </Text>
        <TextInput
          onChangeText={setEmail}
          editable
          style={styles.input}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>
          <Icon name="locked" size={20} color={gray_100} />
        </Text>
        <TextInput
          onChangeText={setPassword}
          editable
          style={styles.input}
          value={password}
          secureTextEntry={!isPasswordVisible}
          placeholder="Enter your password"
        />
        <Text>
          <Icons
            onPress={togglePasswordVisibility}
            name={isPasswordVisible ? 'eye' : 'eye-with-line'}
            size={28}
            color={gray_100}
          />
        </Text>
      </View>
      <Text style={styles.forgotPass}>Forgot passcode?</Text>
      <View style={styles.loginBtContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.createCcount}>Create account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: white_color,
  },
  headingText: {
    fontSize: 22,
    color: black_color,
    marginLeft: 20,
    fontFamily: 'Raleway-ExtraBold',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    width: 290,
    overflow: 'hidden',
    borderRadius: 50,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: gray_100,
    marginLeft: 10,
    padding: 10,
    marginTop: 35,
  },
  input: {
    height: 50,
    width: '80%',
    // margin: 12,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: 'black',
    marginLeft: 5,
    fontSize: 16,
  },
  loginBtContainer: {
    marginLeft: 50,
  },
  forgotPass: {
    color: COLORS.BlueViolet,
    marginVertical: 5,
    marginLeft: 20,
    fontSize: 17,
  },
  loginBtn: {
    backgroundColor: COLORS.BlueViolet,
    paddingVertical: 13,
    width: 220,
    borderRadius: 10,
  },
  loginBtnText: {
    color: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
  },
  createCcount: {
    color: COLORS.BlueViolet,
    marginBottom: 100,
    marginTop: 10,
    marginLeft: 46,
    fontSize: 17,
  },
});
