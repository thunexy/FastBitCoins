import React, {FC} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {Text} from '../';
import {buttonStyles} from './style';

type Props = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Button: FC<Props & ViewStyle> = ({
  text,
  onPress,
  disabled = false,
  ...rest
}) => {
  const {primary, disabledStyle, textStyle, button} = buttonStyles;
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View
        style={[button, disabled ? disabledStyle : primary, rest as ViewStyle]}>
        <Text
          {...textStyle}
          {...{color: disabled ? 'primaryBlack20' : 'primaryBlack'}}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};
