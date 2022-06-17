import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import AppButton from '../../../components/AppButton';
import Dice from '../../../components/Dice';

const ResultStage = ({
  isTurn,
  clients,
  dice1,
  dice2,
  turnResult,
  gameId,
  deviceId,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Actual roll:
      </Text>
      <View style={styles.dice}>
        <Dice value={dice1}/>
        <Dice value={dice2}/>
      </View>
      <Text style={styles.text}>
        Scores of either {dice1}{dice2} or {dice2}{dice1} are acceptable.
      </Text>
      {
        turnResult === 'honest-accept' && 
          <Text style={styles.text}>
            honest-accept
          </Text>
      }
      {
        turnResult === 'honest-call' && 
          <Text style={styles.text}>
            honest-call
          </Text>
      }
      {
        turnResult === 'bluff-accept' && 
          <Text style={styles.text}>
            bluff-accept
          </Text>
      }
      {
        turnResult === 'bluff-call' && 
          <Text style={styles.text}>
            bluff-call
          </Text>
      }
      {
        clients[deviceId] !== undefined && 
        clients[deviceId].hasOwnProperty('alive') && 
        clients[deviceId].alive && 
          <AppButton
            onPress={() => {}}
            title='Ok'
          />
      }
    </View>
  );
}

export default ResultStage;