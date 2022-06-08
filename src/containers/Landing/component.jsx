import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const LandingScreen = ({authenticated}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Landing Screen</Text>
      <Text>{authenticated}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('test')}> 
        <Text style={styles.lf}>Test</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LandingScreen;