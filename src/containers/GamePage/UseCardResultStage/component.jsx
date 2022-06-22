import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import ActionCard from '../../../components/ActionCard';
import AppButton from '../../../components/AppButton';

const UseCardResultStage = ({
  active,
  clients,
  prevPlayerId,
  currentPlayerId,
  curCard,
  pressedOk,
  gameId,
  deviceId,
  handleOk,
}) => {
  const [hasPressedButton, setHasPressedButton] = useState(false);
  
  return (
    <View styles={styles.container}>
      {
        clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
          <View style={styles.innerContainer}>
            <Text style={styles.text}>
              {clients[prevPlayerId].username} used the following card:
            </Text>
            <ActionCard name={curCard} isSelected={false}/>
          </View>
      }
      {
        clients[deviceId] !== undefined && 
        clients[deviceId].hasOwnProperty('alive') && 
        clients[deviceId].alive && 
        active &&
          <View>
            {
              hasPressedButton ? 
                <AppButton 
                  title={`Waiting for ${pressedOk} more...`}
                />
              :
                <AppButton
                  onPress={() => { 
                    handleOk(deviceId, gameId);
                    setHasPressedButton(true);
                  } }
                  title='Ok'
                />
            }
          </View>
      }
    </View>
  );
}

export default UseCardResultStage;
