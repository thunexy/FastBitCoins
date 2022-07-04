import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useImmer} from 'use-immer';
import {LabelledInput} from '../../../blocks';
import {Button, Flex, ScreenWrapper} from '../../../units';
interface Prop {
  navigation: StackNavigationProp<{CountryScreen: undefined}>;
}
export default function EmailScreen({navigation}: Prop) {
  const [email, setEmail] = useImmer('');
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
          onPress={() => navigation.navigate('CountryScreen')}
        />
      </Flex>
    </ScreenWrapper>
  );
}
