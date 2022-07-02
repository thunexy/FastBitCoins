import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import {Input, Text} from '../../units';
import {style} from './style';

type Props = {
  label: string;
  placeHolder: string;
  trackLength?: boolean;
};

export const LabelledInput: FC<Props & ViewStyle> = ({
  label,
  placeHolder,
  trackLength = false,
  ...rest
}) => {
  const {container, text} = style;
  return (
    <View style={[container, rest as ViewStyle]}>
      <Text {...text} color="grey400" size="normal">
        {label}
      </Text>
      <Input placeHolder={placeHolder} trackLength={trackLength} />
    </View>
  );
};
