import {StyleSheet} from 'react-native';
import {Colors} from '../../lib/contants/colors';

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primaryYellow,
    paddingVertical: 18,
    borderRadius: 5,
    alignItems: 'center',
  },
  primaryText: {
    color: Colors.primaryBlack,
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '700',
  },
});
