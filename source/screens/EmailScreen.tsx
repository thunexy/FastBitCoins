import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {LabelledInput} from '../blocks';
import {Button, Flex, ScreenWrapper} from '../units';
interface Prop {
  navigation: StackNavigationProp<{CountryScreen: undefined}>;
}
export default function EmailScreen({navigation}: Prop) {
  return (
    <ScreenWrapper bg="primaryWhite">
      <Flex justifyContent="space-between" paddingTop={32}>
        <LabelledInput placeHolder="Your email address" label="Email" />
        <Button
          text="Continue"
          marginTop={35}
          onPress={() => navigation.navigate('CountryScreen')}
        />
      </Flex>
    </ScreenWrapper>
  );
}
