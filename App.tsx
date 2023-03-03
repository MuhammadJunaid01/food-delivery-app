import {
  notiFicationServices,
  requestUserPermission,
} from '@/libs/pushNotifications';
import DrawerNavigator from '@/src/navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
function App() {
  useEffect(() => {
    requestUserPermission();
    notiFicationServices();
  }, []);
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App;
