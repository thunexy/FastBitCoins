import {StyleSheet} from 'react-native';
import {Colors} from '../../lib/contants/colors';

export const style = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    width: '100%',
    height: '89%',
  },
  dragWrapper: {
    alignItems: 'center',
    marginVertical: 21,
  },
  drag: {
    backgroundColor: Colors.primaryBlack10,
    height: 6,
    width: 82,
    borderRadius: 4,
  },
});
