import React from 'react';
import RNModal from 'react-native-modal';
import {Box} from '../Box';
import {style} from './style';
interface ModalProps {
  children?: React.ReactNode;
  isVisible: boolean;
  hideModal: () => void;
}
export const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  hideModal,
}) => {
  const {wrapper, container, drag, dragWrapper} = style;
  return (
    <RNModal
      isVisible={isVisible}
      style={wrapper}
      onSwipeComplete={hideModal}
      hasBackdrop={false}
      swipeDirection="down"
      propagateSwipe>
      <Box {...container}>
        <Box {...dragWrapper}>
          <Box {...drag} />
        </Box>
        {children}
      </Box>
    </RNModal>
  );
};
