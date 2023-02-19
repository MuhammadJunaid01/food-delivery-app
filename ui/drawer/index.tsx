/* eslint-disable prettier/prettier */
import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
export default function DrawerContent(
  props: JSX.IntrinsicAttributes &
    ScrollViewProps & {
      children: React.ReactNode;
    } & React.RefAttributes<ScrollView>,
) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <Text>Main Text</Text>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item label="hello" />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
