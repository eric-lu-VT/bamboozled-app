import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';

import styles from './styles';
import AppButton from '../../../components/AppButton';
import CardHand from '../../../components/CardHand';

const BeforeRollStage = ({
  isTurn,
  clients,
  currentPlayerId,
  gameId,
  beforeActionCards,
  deviceId,
  curCardSelected,
  rollDice,
  useCard,
  changeCurCardSelected,
}) => {
  return (
    <View>
      {isTurn ?
        <View>
          <CardHand />
          {
            curCardSelected !== '' &&
            <AppButton 
              onPress={() => {
                useCard(deviceId, gameId, 'before', (curCardSelected === '' ? '' : beforeActionCards[curCardSelected]))
                changeCurCardSelected('');
              }}
              title="Use Selected Card"
              isArrow='true'
            />
          }
          <AppButton 
          onPress={() => {
            rollDice(deviceId, gameId);
            changeCurCardSelected('');
          }}
          title="Roll Dice"
          isArrow='true'
          />
        </View>
      :
        <View>
          {
            clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
              <Text style={styles.text}>
                {clients[currentPlayerId].username} is rolling their dice...
              </Text>
          }
        </View>
      }
    </View>
  );
}

export default BeforeRollStage;
