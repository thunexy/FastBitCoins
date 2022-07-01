import React, {FC, ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {flexStyles} from './style';

interface Props {
  children: ReactNode;
}

export const Flex: FC<Props & ViewStyle> = ({children, ...rest}) => {
  return (
    <View style={[flexStyles.container, rest as ViewStyle]}>{children}</View>
  );
};
