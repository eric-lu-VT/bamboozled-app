import { StyleSheet, Dimensions } from 'react-native';
import TextStyles from '../../../utils/TextStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...TextStyles.regular,
  }
});