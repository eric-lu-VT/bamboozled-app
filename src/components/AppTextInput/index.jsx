import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

import Colors from '../../utils/Colors';
import TextStyles from '../../utils/TextStyles';

const AppTextInput = ({ 
  onChangeText,
  value,
  placeholder
}) => (
  <TextInput
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    style={styles.appTextInputContainer}
  />
);

const styles = StyleSheet.create({
  appTextInputContainer: {
    ...TextStyles.regular,
    borderColor: 'lightgrey',
    borderRadius: 4,
    borderWidth: 1,
    width: '75%',
    padding: 10,
    textAlign: 'center'
  },
});

export default AppTextInput;
