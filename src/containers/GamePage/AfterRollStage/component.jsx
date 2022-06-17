import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import CharacterInput from 'react-native-character-input'

import styles from './styles';
import AppButton from '../../../components/AppButton';

const AfterRollStage = ({
  isTurn,
  clients,
  currentPlayerId,
  dice1,
  dice2,
  gameId,
  deviceId,
  declareScore,
}) => {
  const [bluff, setBluff] = useState('')
  const bd1 = useState(bluff[0] ? parseInt(bluff[0]) : 0);
  const bd2 = useState(bluff[1] ? parseInt(bluff[1]) : 0);
  
  return (
    <View>
      {isTurn ?
        <View style={styles.container}>
          <Text style={styles.text}>
            You rolled:
          </Text>
          <Text style={styles.text}>
            Dice 1: {dice1}
          </Text>
          <Text style={styles.text}>
            Dice 2: {dice2}
          </Text>
          <AppButton
            onPress={() => declareScore(deviceId, gameId, 'honest', dice1, dice2)}
            title={ `Accept ${dice1}${dice2}`}
            isArrow='true'
          />
          <AppButton
            onPress={() => declareScore(deviceId, gameId, 'honest', dice2, dice1)}
            title={ `Accept ${dice2}${dice1}`}
            isArrow='true'
          />
          <CharacterInput
            placeHolder='  '
            showCharBinary='11'
            handleChange={(text) => setBluff(text)}
            inputType='underlined'
          />
          <AppButton
            onPress={() => declareScore(deviceId, gameId, 'bluff', bd1, bd2)}
            title='Bluff'
            isArrow='true'
          />
        </View>
      :
        <View style={styles.container}>
          {clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
            <Text style={styles.text}>
              {clients[currentPlayerId].username} is looking at their dice...
            </Text>
          }
        </View>
      }
    </View>
  );
}

export default AfterRollStage;
