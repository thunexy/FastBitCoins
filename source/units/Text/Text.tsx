import React, {FC, ReactNode} from 'react';
import {Text as RNText, TextStyle} from 'react-native';
import {Colors} from '../../lib/contants/colors';
import {TextSizes, Variant} from '../../lib/contants/textSizes';
import {textStyles} from './style';

interface Props {
  children: ReactNode;
  color?: keyof typeof Colors;
  size?: Variant;
  align?: 'center' | 'left' | 'right';
}

export const Text: FC<Props & TextStyle> = ({
  children,
  color = 'primaryBlack',
  size = 'body',
  align = 'left',
  ...rest
}) => {
  const {text} = textStyles;
  return (
    <RNText
      style={[
        rest as TextStyle,
        text,
        {color: Colors[color], ...TextSizes[size], textAlign: align},
      ]}>
      {children}
    </RNText>
  );
};
