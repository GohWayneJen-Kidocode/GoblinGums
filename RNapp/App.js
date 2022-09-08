import React from 'react';
import {  View} from 'react-native';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Navigator from './app/routes/homeStack';
import Menu from './app/screens/Menu';
import 'react-native-gesture-handler';


export default function App() {

  return (
    <Menu />
  );
}

