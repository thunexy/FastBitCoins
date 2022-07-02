import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {LabelledInput} from '../blocks';
import {Box, Button, Flex, ScreenWrapper, Text} from '../units';
interface Prop {
  navigation: StackNavigationProp<{CountryScreen: undefined}>;
}
export default function CountryScreen({navigation}: Prop) {
  return (
    <ScreenWrapper bg="primaryWhite">
      <Flex justifyContent="space-between" marginTop={10}>
        <Box>
          <Text
            align="center"
            color="grey400"
            size="mini"
            marginHorizontal={24}
            marginBottom={29}>
            Bacon ipsum dolor amet kielbasa filet mignon biltong hamburger
            tri-tip sirloin.
          </Text>
          <LabelledInput
            placeHolder="Select country"
            label="What country do you live in?"
            trackLength={true}
          />
        </Box>
        <Button
          text="Continue"
          disabled={true}
          marginTop={35}
          onPress={() => {}}
        />
      </Flex>
    </ScreenWrapper>
  );
}
