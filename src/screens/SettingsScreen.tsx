/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {primary_color, white_color} from '../../libs/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';
import SearchBox from '../../ui/searchBox';
const Settings = () => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.openDrawr}>
        <SearchBox />
      </Text>
      <Text style={styles.headingText}>Settings</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Go to Contact Screen</Text>
      </TouchableOpacity>
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
  headingText: {
    fontSize: 40,
    textAlign: 'center',
  },
  btn: {
    marginVertical: 30,
    padding: 10,
    borderRadius: 10,
    backgroundColor: white_color,
  },
  btnText: {
    color: 'black',
    fontSize: 25,
  },
  openDrawr: {
    position: 'absolute',
    top: 30,
    left: 0,
  },
});
export default Settings;
