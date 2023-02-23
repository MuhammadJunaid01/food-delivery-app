import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {gray_100, white_color} from '../../libs/colors';

export default function SearchBox() {
  const navigation = useNavigation();
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="menu-fold"
        size={24}
        color="black"
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.searchBox}>
        <Text>
          <Icon name="search1" size={24} color={white_color} />
        </Text>
        <TextInput
          editable
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: 250,
    overflow: 'hidden',
    borderRadius: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: gray_100,
    marginLeft: 10,
    padding: 10,
  },
  input: {
    height: 48,
    width: '90%',
    // margin: 12,
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  icon: {
    color: gray_100,
    // marginTop: 100,
    fontSize: 30,
    marginLeft: 15,
  },
});
