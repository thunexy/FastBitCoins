import React, {FC} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {Text} from '../';
import {buttonStyles} from './style';

type Props = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
};

export const Button: FC<Props & ViewStyle> = ({
  text,
  onPress,
  disabled = false,
  type = 'primary',
  ...rest
}) => {
  const {primaryStyle, secondaryStyle, disabledStyle, button} = buttonStyles;
  const isPrimary = type === 'primary';
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View
        style={[
          button,
          disabled ? disabledStyle : isPrimary ? primaryStyle : secondaryStyle,
          rest as ViewStyle,
        ]}>
        <Text
          size="body"
          {...{
            color: disabled
              ? 'primaryBlack20'
              : isPrimary
              ? 'primaryBlack'
              : 'primaryYellow',
          }}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};
