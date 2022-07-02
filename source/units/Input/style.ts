import {StyleSheet} from 'react-native';
import {Colors} from '../../lib/contants/colors';

export const inputStyles = StyleSheet.create({
  input: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  active: {
    borderColor: Colors.black,
  },
  inActive: {
    borderColor: Colors.primaryBlack10,
    elevation: 2,
    shadowColor: Colors.white,
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 1.4,
  },
});
