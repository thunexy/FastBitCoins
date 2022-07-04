import {StyleSheet} from 'react-native';
import {Colors} from '../../lib/contants/colors';

export const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    borderRadius: 5,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: Colors.primaryYellow,
  },
  disabledStyle: {
    backgroundColor: Colors.primaryBlack10,
  },
});
