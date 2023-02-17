/* eslint-disable prettier/prettier */

import {useState} from 'react';

export default function useAuth() {
  const [isLogedIn, setIsLogedIn] = useState<boolean>(true);
  const handleLogin = () => {
    setIsLogedIn(!isLogedIn);
  };
  return {isLogedIn, setIsLogedIn, handleLogin};
}
