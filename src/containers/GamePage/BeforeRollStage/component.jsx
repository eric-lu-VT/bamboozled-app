import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';

import styles from './styles';
import AppButton from '../../../components/AppButton';

const AfterRollStage = ({
  isTurn,
  clients,
  currentPlayerId,
  gameId,
  deviceId,
  rollDice,
}) => {
  return (
    <View>
      {isTurn ?
        <AppButton 
          onPress={() => rollDice(deviceId, gameId)}
          title="Roll Dice"
          isArrow='true'
        />
      :
        <View>
          {
            clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
              <Text style={styles.tex}>
                {clients[currentPlayerId].username} is rolling their dice...
              </Text>
          }
        </View>
      }
    </View>
  );
}

export default AfterRollStage;