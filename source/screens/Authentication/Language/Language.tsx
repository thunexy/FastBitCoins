import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useImmer} from 'use-immer';
import {Colors} from '../../../lib/contants/colors';
import {languages} from '../../../lib/contants/languages';
import {saveLanguage} from '../../../redux/actions/authActions';
import {Button, Flex, Logo, Picker, ScreenWrapper, Text} from '../../../units';
import {style} from './style';
interface Prop {
  navigation: StackNavigationProp<{EmailScreen: undefined}>;
}
export default function LanguageScreen({navigation}: Prop) {
  const [language, setLanguage] = useImmer(languages[0].value);
  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);
  const {instruction} = style;
  const handleNavigation = () => {
    dispatch(saveLanguage(language));
    navigation.navigate('EmailScreen');
  };
  return (
    <ScreenWrapper bg="primaryBlack">
      <StatusBar
        backgroundColor={Colors.primaryBlack}
        barStyle="dark-content"
      />
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
