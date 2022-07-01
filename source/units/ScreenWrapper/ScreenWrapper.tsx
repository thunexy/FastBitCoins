import React, {FC, ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../lib/contants/colors';
import {screenWrapperStyles} from './style';

interface Props {
  children: ReactNode;
  bg?: keyof typeof Colors;
}

export const ScreenWrapper: FC<Props> = ({children, bg = 'primaryWhite'}) => {
  return (
    <SafeAreaView
      style={[screenWrapperStyles.container, {backgroundColor: Colors[bg]}]}>
      {children}
    </SafeAreaView>
  );
};
