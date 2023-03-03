import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      fcmToken();
    }
  } catch (error) {
    console.error(error);
  }
};
const fcmToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      const fcm_token = await messaging().getToken();
      await AsyncStorage.setItem('token', fcm_token);
    }
  } catch (error) {
    console.error(error);
  }
};
export const notiFicationServices = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  //for background message
  messaging().onMessage(remoteMessage => {
    console.log('A new FCM message arrived!', remoteMessage);
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
