import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../utils/Colors';

const HeaderButton = ({ 
  props
}) => {
  const navigation = useNavigation();
  
  return (
    <AntDesign 
      name='arrowleft' 
      size={30} 
      color='white'
      style={{
        paddingLeft: 10
      }}
      onPress={() => navigation.goBack()}
    />
  )
};

export default HeaderButton;
