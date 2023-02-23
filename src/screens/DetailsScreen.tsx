import {DetailsScreenProps} from '@/libs/interfaces';
import {COLORS} from '@/libs/theme';
import Details from '@/ui/details';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
const DetailsScreen = ({navigation, route}: DetailsScreenProps) => {
  const {itemId} = route.params;
  const colorSchema = useColorScheme();
  console.log(colorSchema);
  return (
    <View
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {backgroundColor: colorSchema === 'dark' ? COLORS.dark : 'red'},
      ]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>
            <Icons name="arrow-long-left" size={25} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>
            <Icons name="heart-outlined" size={28} />
          </Text>
        </TouchableOpacity>
      </View>

      <Details id={itemId} />
    </View>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
