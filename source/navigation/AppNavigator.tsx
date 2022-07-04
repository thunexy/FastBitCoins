import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Pressable} from 'react-native';
import {Colors} from '../lib/contants/colors';
import {fontFamily} from '../lib/contants/textSizes';
import {
  CountryScreen,
  EmailScreen,
  LanguageScreen,
  VerificationScreen,
} from '../screens/Authentication';
import {Icon} from '../units';

const AppStack = createStackNavigator();

const getScreenOptions = (navigation, title) => {
  return {
    title,
    headerLeft: () => (
      <Pressable onPress={navigation.goBack}>
        <Icon name="ArrowLeft" />
      </Pressable>
    ),
    headerRight: () => <Icon name="Logo" />,
    headerLeftContainerStyle: {
      paddingHorizontal: 24,
    },
    headerRightContainerStyle: {
      paddingHorizontal: 24,
    },
    headerStyle: {
      backgroundColor: Colors.primaryWhite,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      fontFamily: fontFamily.poppinsSemiBold,
      color: Colors.primaryBlack,
      fontSize: 18,
    },
  };
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        // screenOptions={{headerShown: false}}
        initialRouteName="LanguageScreen">
        <AppStack.Screen
          options={() => ({
            headerShown: false,
          })}
          name="LanguageScreen"
          component={LanguageScreen}
        />
        <AppStack.Screen
          options={({navigation}) =>
            getScreenOptions(navigation, 'Enter your email address')
          }
          name="EmailScreen"
          component={EmailScreen}
        />
        <AppStack.Screen
          options={({navigation}) =>
            getScreenOptions(navigation, 'Your new account')
          }
          name="CountryScreen"
          component={CountryScreen}
        />
        <AppStack.Screen
          options={() => ({
            headerShown: false,
          })}
          name="VerificationScreen"
          component={VerificationScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
