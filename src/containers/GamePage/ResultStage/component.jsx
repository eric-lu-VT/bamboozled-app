import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import AppButton from '../../../components/AppButton';
import Dice from '../../../components/Dice';

const ResultStage = ({
  active,
  clients,
  currentPlayerId,
  prevPlayerId,
  reportedDice1,
  reportedDice2,
  dice1,
  dice2,
  turnResult,
  gameId,
  deviceId,
}) => {
  const navigation = useNavigation();

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
        Scores of either {dice1}{dice2} or {dice2}{dice1} were acceptable.
      </Text>
      {
        turnResult === 'honest-accept' && 
          <View>
            {
              clients[prevPlayerId] !== undefined && clients[prevPlayerId].hasOwnProperty('username') && 
              clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
                <View style={styles.innerContainer}>
                  <Text style={styles.text}>
                    {clients[prevPlayerId].username}'s claim of {reportedDice1}{reportedDice2} was true.
                  </Text>
                  <Text style={styles.text}>
                    {clients[currentPlayerId].username} faces no penalty for accepting {clients[prevPlayerId].username}'s claim.
                  </Text>
                </View>
            }
          </View>
      }
      {
        turnResult === 'honest-call' && 
          <View>
            {
              clients[prevPlayerId] !== undefined && clients[prevPlayerId].hasOwnProperty('username') && clients[prevPlayerId].hasOwnProperty('alive') &&
              clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && clients[currentPlayerId].hasOwnProperty('alive') &&
                <View style={styles.innerContainer}>
                  <Text style={styles.text}>
                    {clients[prevPlayerId].username}'s claim of {reportedDice1}{reportedDice2} was true.
                  </Text>
                  <Text style={styles.text}>
                    {clients[currentPlayerId].username}'s bluff call was incorrect, and thus {clients[currentPlayerId].username} incurs a strike card.
                  </Text>
                  {
                    !clients[currentPlayerId].alive &&
                      <Text style={styles.text}>
                        {clients[currentPlayerId].username} incurred three strike cards and has been eliminated.
                      </Text>
                  }
                  {
                    !active &&
                      <Text style={styles.text}>
                        {clients[prevPlayerId].username} has won the game!
                      </Text>
                  }
                </View>
            }
          </View>
      }
      {
        turnResult === 'bluff-accept' && 
          <View>
            {
              clients[prevPlayerId] !== undefined && clients[prevPlayerId].hasOwnProperty('username') && 
              clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
                <View style={styles.innerContainer}>
                  <Text style={styles.text}>
                    {clients[prevPlayerId].username}'s claim of {reportedDice1}{reportedDice2} was a bluff.
                    {clients[prevPlayerId].username} draws an action card.
                  </Text>
                  <Text style={styles.text}>
                    {clients[currentPlayerId].username} was bamboozled, but faces no penalty.
                  </Text>
                </View>
            }
          </View>
      }
      {
        turnResult === 'bluff-call' && 
          <View>
            {
              clients[prevPlayerId] !== undefined && clients[prevPlayerId].hasOwnProperty('username') && clients[prevPlayerId].hasOwnProperty('alive') &&
              clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && clients[currentPlayerId].hasOwnProperty('alive') &&
                <View style={styles.innerContainer}>
                  <Text style={styles.text}>
                    {clients[prevPlayerId].username}'s claim of {reportedDice1}{reportedDice2} was a bluff.
                  </Text>
                  <Text style={styles.text}>
                    {clients[currentPlayerId].username}'s bluff call was correct. Thus, {clients[prevPlayerId].username} incurs a strike card.
                  </Text>
                  {
                    !clients[currentPlayerId].alive &&
                      <Text style={styles.text}>
                        {clients[prevPlayerId].username} incurred three strike cards and has been eliminated.
                      </Text>
                  }
                  {
                    !active &&
                      <Text style={styles.text}>
                        {clients[currentPlayerId].username} has won the game!
                      </Text>
                  }
                </View>
            }
        </View>
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
      {
        !active &&
          <AppButton
            onPress={() => { navigation.navigate('Landing') }}
            title='Leave Game'
          />
      }
    </View>
  );
}

export default ResultStage;