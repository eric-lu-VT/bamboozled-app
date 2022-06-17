import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AcceptStage from './AcceptStage';
import BeforeRollStage from './BeforeRollStage';
import AfterRollStage from './AfterRollStage';
import ResultStage from './ResultStage';

import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const GamePage = ({
  curStage
}) => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Player Info')}>
        <AntDesign 
          name='bars' 
          size={30} 
          color='black'
          style={styles.tabButton}
        />
        <Text style={styles.textHeader}>
          Players
        </Text>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        { 
          curStage === 'accept-stage' &&
            <AcceptStage />
        }
        { 
          curStage === 'before-roll-stage' &&
            <BeforeRollStage />
        }
        { 
          curStage === 'after-roll-stage' && 
            <AfterRollStage />
        }
        { 
          curStage === 'result-stage' &&
            <ResultStage />
        }
      </View>
    </SafeAreaView>
  );
}

export default GamePage;