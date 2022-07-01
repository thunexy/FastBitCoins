import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Flex, Logo, Picker, ScreenWrapper, Text} from '../units';
interface Prop {
  navigation: StackNavigationProp<{EmailScreen: undefined}>;
}
export default function LanguageScreen({navigation}: Prop) {
  const handleNavigation = () => {
    navigation.navigate('EmailScreen');
  };
  return (
    <ScreenWrapper bg="primaryBlack">
      <Flex justifyContent="center">
        <Logo />
        <Text
          color="primaryYellow"
          size="h1"
          align="center"
          marginBottom={52}
          marginTop={88}>
          Select your Language
        </Text>
        <Picker
          data={[
            {
              label: 'English',
              value: 'english',
            },
          ]}
        />
        <Button text="Continue" marginTop={35} onPress={handleNavigation} />
      </Flex>
    </ScreenWrapper>
  );
}
