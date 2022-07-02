import React, {FC} from 'react';
import {TextInput, ViewStyle} from 'react-native';
import {Colors} from '../../lib/contants/colors';
import {inputStyles} from './style';

type Props = {
  placeHolder: string;
  trackLength?: boolean;
};

export const Input: FC<Props & ViewStyle> = ({
  placeHolder,
  trackLength = false,
}) => {
  console.log(trackLength);
  const {input, active, inActive} = inputStyles;
  return (
    <TextInput
      placeholder={placeHolder}
      placeholderTextColor={
        trackLength ? Colors.primaryBlack30 : Colors.grey400
      }
      style={[input, trackLength ? inActive : active]}
    />
  );
};
