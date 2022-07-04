import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import {Colors} from '../../lib/contants/colors';
import {screenWrapperStyles} from './style';

interface Props {
  children: ReactNode;
  bg?: keyof typeof Colors;
}

export const ScreenWrapper: FC<Props> = ({children, bg = 'primaryWhite'}) => {
  return (
    <View
      style={[screenWrapperStyles.container, {backgroundColor: Colors[bg]}]}>
      {children}
    </View>
  );
};
