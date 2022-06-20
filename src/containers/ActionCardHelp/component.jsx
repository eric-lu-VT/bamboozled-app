import React from 'react';
import { SafeAreaView, ScrollView, View, FlatList, TouchableOpacity } from 'react-native';

import CardHand from '../../components/CardHand'
import ActionCard from '../../components/ActionCard';
import styles from './styles';

const ActionCardHelp = ({
  beforeActionCards
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CardHand />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ActionCard name="double" />
        <ActionCard name="fresh_start" />
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default ActionCardHelp;

/*
  <ActionCard name="jackpot" />
  <ActionCard name="my_bad" />
  <ActionCard name="reverse" />
  <ActionCard name="revive" />
  <ActionCard name="skip" />
  <ActionCard name="up_down" />
*/
