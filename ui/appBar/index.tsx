/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import IconsE from 'react-native-vector-icons/Entypo';
import {Image} from 'react-native';
import {COLORS, SIZES} from '../../libs/theme';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import IconsFa from 'react-native-vector-icons/FontAwesome';
import {gray_100} from '../../libs/colors';

export default function Appbar() {
  const navigation = useNavigation();

  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={{marginTop: 11, marginRight: 9}}>
          <Icons name="menu-fold" size={25} color={COLORS.white} />
        </Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <Icons name="search1" size={SIZES.h1} />
        <TextInput
          editable
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search"
        />
        <Text>
          <IconsFa name="sliders" size={SIZES.h1} />
        </Text>
      </View>

      <Text style={styles.icon}>
        <Icons name="bells" size={22} color={COLORS.white} />
      </Text>
      <Text style={styles.icon}>
        <Icons name="hearto" size={22} color={COLORS.white} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 9,
  },
  textInfo: {
    fontSize: SIZES.h4,
  },
  icon: {
    marginRight: 9,
    marginTop: 5,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    width: 100,
    overflow: 'hidden',
    borderRadius: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: gray_100,
    padding: 10,
    marginRight: 20,
  },

  input: {
    height: 38,
    width: '80%',
    // margin: 12,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});
