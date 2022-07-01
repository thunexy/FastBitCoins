import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {Text} from '../';
import {buttonStyles} from './style';

type Props = {
  text: string;
};

export const Button: FC<Props> = ({text}) => {
  const {primary, primaryText} = buttonStyles;
  return (
    <Pressable onPress={() => {}}>
      <View style={primary}>
        <Text color="primaryBlack">{text}</Text>
      </View>
    </Pressable>
  );
};
