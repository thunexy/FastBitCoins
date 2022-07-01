import React, {FC} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {Text} from '..';
import {buttonStyles} from './style';

type Props = {
  text: string;
};

export const Button: FC<Props & ViewStyle> = ({text, ...rest}) => {
  const {primary, primaryText} = buttonStyles;
  return (
    <Pressable onPress={() => {}}>
      <View style={[primary, rest as ViewStyle]}>
        <Text color="primaryBlack">{text}</Text>
      </View>
    </Pressable>
  );
};
