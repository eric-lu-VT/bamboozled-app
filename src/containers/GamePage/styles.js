import { StyleSheet, Dimensions } from 'react-native';
import TextStyles from '../../utils/TextStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10
  },
  innerContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    marginRight: 5,
  },
  textHeader: {
    ...TextStyles.subTitle,
  }
});