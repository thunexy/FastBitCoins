import React from 'react';
import {Flex, ScreenWrapper, Text} from '../../../units';
import {style} from './style';
export default function WelcomeScreen() {
  return (
    <ScreenWrapper bg="primaryWhite">
      <Flex justifyContent="center" alignItems="center">
        <Text align="center" style={style.text}>
          Welcome
        </Text>
      </Flex>
    </ScreenWrapper>
  );
}
