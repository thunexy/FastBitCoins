import {StyleSheet} from 'react-native';
import {Colors} from '../../lib/contants/colors';
import {fontFamily} from '../../lib/contants/textSizes';

export const style = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.primaryBlack10,
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  header: {
    marginBottom: 18,
    lineHeight: 32,
    fontWeight: '600',
    fontFamily: fontFamily.poppinsSemiBold,
  },
  textWithImage: {lineHeight: 30, marginLeft: 12, flex: 1},
  text: {lineHeight: 30, marginLeft: 0, flex: 1},
});
