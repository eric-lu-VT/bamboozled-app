import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import AppButton from '../../../components/AppButton';

const AcceptStage = ({
  isTurn,
  clients,
  prevPlayerId,
  currentPlayerId,
  reportedDice1,
  reportedDice2,
  gameId,
  deviceId,
  acceptAttempt,
}) => {
  return (
    <View>
      {clients[prevPlayerId] !== undefined && clients[prevPlayerId].hasOwnProperty('username') && 
        <View style={styles.container}>
          <Text style={styles.text}>
            {clients[prevPlayerId].username} declares a score of {reportedDice1}{reportedDice2}.
          </Text>
        </View>
      }
      {isTurn ?
        <View>
          <AppButton
            onPress={() => acceptAttempt(deviceId, gameId, 'accept')}
            title='Accept'
          />
          <AppButton
            onPress={() => acceptAttempt(deviceId, gameId, 'call')}
            title='Call Bluff'
          />
        </View>
        :
        <View>
          {clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
            <Text style={styles.text}>
              {clients[currentPlayerId].username} is deciding...
            </Text>
          }
        </View>
      }
    </View>
  );
}

export default AcceptStage;
