import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useImmer} from 'use-immer';
import {monitorLogin} from '../../../lib/api/api';
import {createUser, logoutUser} from '../../../redux/actions/authActions';
import Toast from 'react-native-toast-message';
import {Button, Flex, Icon, ScreenWrapper, Text} from '../../../units';
import {style} from './style';
import {Alert} from 'react-native';
interface Prop {
  navigation: StackNavigationProp<{
    CountryScreen: undefined;
    LanguageScreen: undefined;
    WelcomeScreen: undefined;
  }>;
}
export default function VerificationScreen({navigation}: Prop) {
  const {title, instruction} = style;
  const [isLoggedIn, setIsLoggedIn] = useImmer(false);
  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);
  let interval: number;
  const handlePolling = async () => {
    monitorLogin(
      auth.session_key,
      result => {
        if (result.secret) {
          setIsLoggedIn(true);
          stopInterval();
          setTimeout(() => {
            dispatch(createUser(result));
          }, 1000);
        }
      },
      error => {
        Alert.alert('Error', error.message);
      },
    );
  };

  const startInterval = () => {
    interval = setInterval(handlePolling, 3000);
  };
  const stopInterval = () => {
    clearInterval(interval);
  };
  const cancelAuthentication = () => {
    dispatch(logoutUser());
    navigation.navigate('LanguageScreen');
  };

  useEffect(() => {
    startInterval();
    return stopInterval;
  }, []);

  return (
    <ScreenWrapper bg="primaryWhite">
      <Flex paddingTop={32}>
        <Flex alignItems="center" justifyContent="center">
          <Icon name={!isLoggedIn ? 'Envelope' : 'Tick'} />
          <Text size={'h2'} align="center" style={title}>
            {!isLoggedIn ? 'Verify your email' : 'Email verified!'}
          </Text>
          <Text size="big" align="center" color="grey400" style={instruction}>
            {!isLoggedIn
              ? ' Please check your emails'
              : 'Please wait while we redirect you...'}
          </Text>
        </Flex>
        {!isLoggedIn ? (
          <Button
            text="Cancel"
            type="secondary"
            onPress={cancelAuthentication}
          />
        ) : null}
      </Flex>
    </ScreenWrapper>
  );
}
