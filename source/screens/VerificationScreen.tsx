import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Flex, Icon, ScreenWrapper, Text} from '../units';
interface Prop {
  navigation: StackNavigationProp<{CountryScreen: undefined}>;
}
export default function VerificationScreen({navigation}: Prop) {
  return (
    <ScreenWrapper bg="primaryWhite">
      <Flex paddingTop={32}>
        <Flex alignItems="center" justifyContent="center">
          <Icon name="envelope" />
          <Text marginTop={32} size={'h2'} lineHeight={42}>
            Verify your email
          </Text>
          <Text marginTop={24} size="big" color="grey400">
            Please check your emails
          </Text>
        </Flex>
        <Button
          text="Cancel"
          marginTop={35}
          onPress={() => navigation.navigate('CountryScreen')}
        />
      </Flex>
    </ScreenWrapper>
  );
}
