import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useImmer} from 'use-immer';
import {languages} from '../../../lib/contants/languages';
import {Button, Flex, Logo, Picker, ScreenWrapper, Text} from '../../../units';
import {style} from './style';
interface Prop {
  navigation: StackNavigationProp<{EmailScreen: undefined}>;
}
export default function LanguageScreen({navigation}: Prop) {
  const [language, setLanguage] = useImmer(languages[0].value);
  const {instruction} = style;
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
          style={instruction}>
          Select your Language
        </Text>
        <Picker data={languages} value={language} setValue={setLanguage} />
        <Button text="Continue" marginTop={35} onPress={handleNavigation} />
      </Flex>
    </ScreenWrapper>
  );
}
