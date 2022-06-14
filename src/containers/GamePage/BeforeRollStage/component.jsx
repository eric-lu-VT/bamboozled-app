import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const AfterRollStage = ({
  isTurn,
  clients,
  currentPlayerId,
}) => {
  return (
    <View>
      {isTurn ?
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}> 
            <Text style={styles.lf}>Roll Dice</Text>
          </TouchableOpacity>
        </View>
      :
        <View>
          <Text>
            {clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
              <Text>
                {clients[currentPlayerId].username} is rolling their dice...
              </Text>
            }
          </Text>
        </View>
      }
    </View>
  );
}

export default AfterRollStage;