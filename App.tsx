/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './source/navigation/AppNavigator';
import HomeNavigator from './source/navigation/HomeNavigator';

const App = () => {
  const {auth} = useSelector(state => state);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      {auth.secret ? <HomeNavigator /> : <AppNavigator />}
    </SafeAreaProvider>
  );
};

export default App;
