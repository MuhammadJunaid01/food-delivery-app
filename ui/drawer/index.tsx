import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Switch,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';
import IconsFa from 'react-native-vector-icons/FontAwesome';
import {
  default as IconsEn,
  default as IconsMa,
} from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../libs/theme';
export default function DrawerContent(
  props: JSX.IntrinsicAttributes &
    ScrollViewProps & {
      children: React.ReactNode;
    } & React.RefAttributes<ScrollView>,
) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGrey}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('../../src/assets/images/user.jpg')}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>M Junaid</Title>
                <Caption style={styles.caption}>m.jun..20@junaid@.com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={() => <Icons name="home" size={25} color={COLORS.dark} />}
              label="Home"
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => (
                <IconsMa name="account" size={25} color={COLORS.dark} />
              )}
              label="Profile"
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => (
                <IconsEn name="bookmark" size={25} color={COLORS.dark} />
              )}
              label="Bookmarks"
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => (
                <Icons name="setting" size={25} color={COLORS.dark} />
              )}
              label="Settings"
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => (
                <IconsFa name="support" size={25} color={COLORS.dark} />
              )}
              label="Support"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text style={{color: COLORS.dark}}>Dark Theme</Text>
                <View>
                  <Switch
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                    color={COLORS.dark}
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => <Icons name="logout" size={25} color={COLORS.dark} />}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: COLORS.dark,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
