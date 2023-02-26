import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZ1rBvhXmCyIBKyV6saBGnF-bzU4USv4A',
  authDomain: 'react-native-firebase-ap-373ee.firebaseapp.com',
  projectId: 'react-native-firebase-ap-373ee',
  storageBucket: 'react-native-firebase-ap-373ee.appspot.com',
  messagingSenderId: '174844417486',
  appId: '1:174844417486:web:4f11ba3b0cdc8e89f5079f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};
