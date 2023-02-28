import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect, useState} from 'react';

export default function useAuth() {
  const [user, setUser] = useState<any>(undefined);
  const [isLogedIn, setIsLogedIn] = useState<boolean>(true);
  const [confirmId, setConfirmId] = useState<any>('');
  const [code, setCode] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1002288922657-h8njnt16hluc07iuro3kv2h81qq6jlpi.apps.googleusercontent.com',
      offlineAccess: false,
    });
  }, []);

  const handleLogin = () => {
    setIsLogedIn(!isLogedIn);
  };
  async function signInWithPhoneNumber(phoneumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneumber);
    console.log('confirmation.verificationId', confirmation.verificationId);
    setConfirmId(confirmation.verificationId);
  }
  function handleSignOut() {
    auth().signOut();
    console.log('success');
  }
  async function confirmCode() {
    try {
      console.log('called');
      await confirmId.confirm(code);
      console.log('success');
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(User => {
      if (User) {
        setUser(User);
        // User is signed in, do something
        console.log('user', User.uid);
      } else {
        console.log('user not found');
        setUser(null);
        // User is signed out, do something else
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);
  return {
    isLogedIn,
    setIsLogedIn,
    handleLogin,
    handleSignOut,
    signInWithPhoneNumber,
    confirmId,
    setCode,
    confirmCode,
    code,
  };
}
