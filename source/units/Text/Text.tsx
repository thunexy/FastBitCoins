import React, {FC, ReactNode} from 'react';
import {Text as RNText} from 'react-native';
import {Colors} from '../../lib/contants/colors';
import {TextSizes, Variant} from '../../lib/contants/textSizes';
import {textStyles} from './style';

interface Props {
  children: ReactNode;
  color?: keyof typeof Colors;
  size?: Variant;
}

export const Text: FC<Props> = ({
  children,
  color = 'primaryBlack',
  size = 'body',
}) => {
  const {text} = textStyles;
  return (
    <RNText style={[text, {color: Colors[color], ...TextSizes[size]}]}>
      {children}
    </RNText>
  );
};
