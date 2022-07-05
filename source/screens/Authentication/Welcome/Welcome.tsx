import React from 'react';
import {Flex, ScreenWrapper, Text} from '../../../units';
export default function WelcomeScreen() {
  return (
    <ScreenWrapper bg="primaryWhite">
      <Flex justifyContent="center" alignItems="center">
        <Text>Welcome</Text>
      </Flex>
    </ScreenWrapper>
  );
}
