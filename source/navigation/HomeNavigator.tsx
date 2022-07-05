import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../screens/Authentication/Welcome/Welcome';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        // screenOptions={{headerShown: false}}
        initialRouteName="WelcomeScreen">
        <HomeStack.Screen
          options={() => ({
            headerShown: false,
          })}
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
