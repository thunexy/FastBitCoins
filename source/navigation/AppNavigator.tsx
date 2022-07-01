import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import EmailScreen from '../screens/EmailScreen';
import LanguageScreen from '../screens/LanguageScreen';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LanguageScreen">
        <AppStack.Screen name="LanguageScreen" component={LanguageScreen} />
        <AppStack.Screen name="EmailScreen" component={EmailScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
