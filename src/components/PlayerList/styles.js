import { StyleSheet, Dimensions } from 'react-native';
import TextStyles from '../../utils/TextStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...TextStyles.regular,
  }
});