import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const RollStage = ({
  isTurn,
  clients,
  currentPlayerId,
  dice1,
  dice2,
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
          <TouchableOpacity style={styles.button} onPress={() => {}}> 
            <Text style={styles.lf}>Accept {dice1}{dice2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}> 
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

export default RollStage;
