import React, {FC, ReactNode} from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';
import {Colors} from '../../lib/contants/colors';
import {TextSizes, Variant} from '../../lib/contants/textSizes';
import {textStyles} from './style';

interface Props {
  children: ReactNode;
  color?: keyof typeof Colors;
  size?: Variant;
  align?: 'center' | 'left' | 'right';
}

export const Text: FC<Props & TextProps> = ({
  children,
  color = 'primaryBlack',
  size = 'body',
  align = 'left',
  style,
  ...rest
}) => {
  const {text} = textStyles;
  return (
    <RNText
      {...(rest as TextProps)}
      style={[
        text,
        style,
        {color: Colors[color], ...TextSizes[size], textAlign: align},
      ]}>
      {children}
    </RNText>
  );
};
