import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (4 / 7)
  }
});