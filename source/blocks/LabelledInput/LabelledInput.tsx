import React, {FC} from 'react';
import {TextInputProps} from 'react-native';
import {Colors} from '../../lib/contants/colors';
import {Box, IconProps, Input, Text} from '../../units';
import {style} from './style';

type Props = {
  label: string;
  placeHolder: string;
  trackLength?: boolean;
  handleInput?: (value: string) => void;
  rightIcon?: IconProps['name'];
};

export const LabelledInput: FC<Props & TextInputProps> = ({
  label,
  placeHolder,
  trackLength = false,
  ...rest
}) => {
  return (
    <Box>
      <Text style={style.label} color="grey400" size="normal">
        {label}
      </Text>
      <Input
        placeHolder={placeHolder}
        placeholderTextColor={Colors.primaryBlack30}
        trackLength={trackLength}
        {...rest}
      />
    </Box>
  );
};
