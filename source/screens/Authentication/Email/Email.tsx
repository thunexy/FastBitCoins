import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useImmer} from 'use-immer';
import {LabelledInput} from '../../../blocks';
import {signIn, SignInRequest} from '../../../lib/api/api';
import {createUser, saveEmail} from '../../../redux/actions/authActions';
import {Button, Flex, ScreenWrapper} from '../../../units';
interface Prop {
  navigation: StackNavigationProp<{
    CountryScreen: undefined;
    VerificationScreen: undefined;
  }>;
}
export default function EmailScreen({navigation}: Prop) {
  const [email, setEmail] = useImmer('');
  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);
  const handleButtonPress = () => {
    dispatch(saveEmail(email));
    const data: SignInRequest = {
      platform: auth.platform,
      email_address: email,
    };
    signIn(
      data,
      result => {
        if (result.new_account) {
          navigation.navigate('CountryScreen');
        } else if (result.session_key) {
          dispatch(createUser(result));
          navigation.navigate('VerificationScreen');
        }
      },
      error => {
        console.log(error.message);
      },
    );
  };
  return (
    <ScreenWrapper bg="primaryWhite">
      <Flex justifyContent="space-between" paddingTop={32}>
        <LabelledInput
          placeHolder="Your email address"
          label="Email"
          handleInput={setEmail}
          keyboardType="email-address"
        />
        <Button
          text="Continue"
          marginBottom={28}
          disabled={!email}
          onPress={handleButtonPress}
        />
      </Flex>
    </ScreenWrapper>
  );
}
