import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Flex, Icon, ScreenWrapper, Text} from '../../../units';
import {style} from './style';
interface Prop {
  navigation: StackNavigationProp<{CountryScreen: undefined}>;
}
export default function VerificationScreen({navigation}: Prop) {
  const {title, instruction} = style;
  return (
    <ScreenWrapper bg="primaryWhite">
      <Flex paddingTop={32}>
        <Flex alignItems="center" justifyContent="center">
          <Icon name="Envelope" />
          <Text size={'h2'} style={title}>
            Verify your email
          </Text>
          <Text size="big" color="grey400" style={instruction}>
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
