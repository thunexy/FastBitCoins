import {StyleSheet} from 'react-native';
import {Colors} from '../../lib/contants/colors';

export const style = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  header: {
    marginBottom: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.primaryBlack10,
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
});
