import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../utils/Colors';
import TextStyles from '../../utils/TextStyles';

const AppButton = ({ 
  onPress, 
  title,
  isArrow
}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
    {
      isArrow && <AntDesign name='caretright' size={25} color='white' />
    }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.primary.normal,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 30,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center'
  },
  appButtonText: {
    ...TextStyles.subTitle,
    color: "white",
    alignSelf: "center",
    textTransform: "uppercase",
  }
});

export default AppButton;