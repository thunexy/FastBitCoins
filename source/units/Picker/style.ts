import {StyleSheet} from 'react-native';
import {Colors} from '../../lib/contants/colors';
import {fontFamily} from '../../lib/contants/textSizes';

const {transparent, grey100, grey200} = Colors;
export const pickerStyles = StyleSheet.create({
  container: {
    backgroundColor: transparent,
    borderColor: grey100,
    paddingHorizontal: 26,
    paddingVertical: 20,
    borderRadius: 4,
  },
  text: {
    color: grey200,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fontFamily.poppinsRegular,
  },
});
