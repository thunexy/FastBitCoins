import {StyleSheet} from 'react-native';
import {Colors} from '../../lib/contants/colors';
import {fontFamily} from '../../lib/contants/textSizes';

export const inputStyles = StyleSheet.create({
  input: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.white,
    fontSize: 18,
    lineHeight: 26,
    fontFamily: fontFamily.poppinsRegular,
    fontWeight: '400',
    color: Colors.grey400,
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
  rightIconStyle: {
    position: 'absolute',
    right: 15,
    top: 20,
    zIndex: 1,
  },
  leftIconStyle: {
    position: 'absolute',
    left: 15,
    top: 20,
    zIndex: 1,
  },
});
