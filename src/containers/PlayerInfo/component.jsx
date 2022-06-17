import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

const PlayerInfo = ({
  clients,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {
        Object.keys(clients).length !== 0 &&
          Object.keys(clients).map((index) => (
            clients[index] !== undefined && 
            clients[index].hasOwnProperty('username') && 
            clients[index].hasOwnProperty('strikes') &&
            clients[index].hasOwnProperty('alive') &&
              <View key={index}>
                {
                  clients[index].alive ?
                    <View style={styles.innerContainer}>
                      <Text key={index} style={styles.text}>
                        - {clients[index].username}:  
                      </Text>
                      {
                        [...Array(clients[index].strikes)].map((e, i) => {
                          return <AntDesign key={i} name='closecircleo' size={20} color='red' />
                        })
                      }
                    </View>
                  :
                    <View style={styles.innerContainer}>
                      <Text key={index} style={styles.textStrikethrough}>
                        - {clients[index].username}
                      </Text>
                      {
                        [...Array(3)].map((e, i) => {
                          return <AntDesign key={i} name='closecircleo' size={20} color='red' />
                        })
                      }
                    </View>
                }
              </View>
          ))
      }
    </SafeAreaView>
  )
}

export default PlayerInfo;