import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CountryScreen from '../screens/CountryScreen';
import EmailScreen from '../screens/EmailScreen';
import LanguageScreen from '../screens/LanguageScreen';
import VerificationScreen from '../screens/VerificationScreen';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LanguageScreen">
        <AppStack.Screen name="LanguageScreen" component={LanguageScreen} />
        <AppStack.Screen name="EmailScreen" component={EmailScreen} />
        <AppStack.Screen name="CountryScreen" component={CountryScreen} />
        <AppStack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
