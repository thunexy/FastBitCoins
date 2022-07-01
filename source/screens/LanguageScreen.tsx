import React from 'react';
import {Button, Picker, ScreenWrapper, Text} from '../units';
export default function LanguageScreen() {
  return (
    <ScreenWrapper bg="primaryBlack">
      <Text color="primaryYellow" size="h1">
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
      <Button text="Continue" />
    </ScreenWrapper>
  );
}
