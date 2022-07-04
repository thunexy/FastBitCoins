import React, {FC, ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {boxStyles} from './style';

interface Props {
  children?: ReactNode;
}

export const Box: FC<Props & ViewStyle> = ({children, ...rest}) => {
  return (
    <View style={[boxStyles.container, rest as ViewStyle]}>{children}</View>
  );
};
