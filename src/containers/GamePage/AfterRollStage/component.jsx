import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

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
  return (
    <View>
      {isTurn ?
        <View>
          <Text>
            You rolled:
          </Text>
          <Text>
            Dice 1: {dice1}
          </Text>
          <Text>
            Dice 2: {dice2}
          </Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => declareScore(deviceId, gameId, 'honest', dice1, dice2)}
          > 
            <Text style={styles.lf}>Accept {dice1}{dice2}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => declareScore(deviceId, gameId, 'honest', dice2, dice1)}
          > 
            <Text style={styles.lf}>Accept {dice2}{dice1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}> 
            <Text style={styles.lf}>Bluff</Text>
          </TouchableOpacity>
        </View>
      :
        <View>
          <Text>
            {clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
              <Text>
                {clients[currentPlayerId].username} is looking at their dice...
              </Text>
            }
          </Text>
        </View>
      }
    </View>
  );
}

export default AfterRollStage;
