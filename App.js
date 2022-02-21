/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './app/src/views/screens/SignInScreen';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SignUpScreen from './app/src/views/screens/SignUpScreen';




const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ header: () => null}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  
  );
};

const styles = StyleSheet.create({

});

export default App;
