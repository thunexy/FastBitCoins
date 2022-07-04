import React from 'react';
import RNModal from 'react-native-modal';
import {Box} from '../Box';
import {style} from './style';
interface ModalProps {
  children?: React.ReactNode;
  isVisible: boolean;
}
export const Modal: React.FC<ModalProps> = ({children, isVisible, ...rest}) => {
  const {wrapper, container, drag, dragWrapper} = style;
  return (
    <RNModal
      isVisible={isVisible}
      style={wrapper}
      hasBackdrop={false}
      swipeDirection="down"
      propagateSwipe
      {...rest}>
      <Box {...container}>
        <Box {...dragWrapper}>
          <Box {...drag} />
        </Box>
        {children}
      </Box>
    </RNModal>
  );
};
