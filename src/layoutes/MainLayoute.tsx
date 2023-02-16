/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import Navigate from '../Navigate';
import GetStartedScreen from '../screens/GetStartedScreen';
import Tabs from '../Tab';

const MainLayoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <Navigate />
        <Tabs />
      </NavigationContainer>
    );
  } else {
    return <GetStartedScreen />;
  }
};

export default MainLayoute;
