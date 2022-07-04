import React, {FC, useEffect} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {useImmer} from 'use-immer';
import {Colors} from '../../lib/contants/colors';
import {Box} from '../Box';
import {Icon, IconProps} from '../Icon';
import {inputStyles} from './style';

type Props = {
  placeHolder: string;
  trackLength?: boolean;
  handleInput?: (value: string) => void;
  rightIcon?: IconProps['name'];
  leftIcon?: IconProps['name'];
};

export const Input: FC<Props & TextInputProps> = ({
  placeHolder,
  trackLength = false,
  handleInput,
  rightIcon,
  leftIcon,
  ...rest
}) => {
  const {input, active, inActive, leftIconStyle, rightIconStyle} = inputStyles;
  const [value, setValue] = useImmer('');
  useEffect(() => {
    if (handleInput) {
      handleInput(value);
    }
  }, [value]);
  return (
    <Box>
      {leftIcon ? (
        <Box {...leftIconStyle}>
          <Icon name={leftIcon} />
        </Box>
      ) : null}
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={
          trackLength ? Colors.grey400 : Colors.primaryBlack30
        }
        value={value}
        onChangeText={setValue}
        style={[
          input,
          trackLength ? active : inActive,
          {paddingLeft: leftIcon ? 51 : 16},
          {paddingRight: rightIcon ? 51 : 16},
        ]}
        {...(rest as TextInputProps)}
      />
      {rightIcon ? (
        <Box {...rightIconStyle}>
          <Icon name={rightIcon} />
        </Box>
      ) : null}
    </Box>
  );
};
