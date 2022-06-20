import React from 'react';
import { FlatList, TouchableOpacity, View, } from 'react-native';

import ActionCard from '../ActionCard';
import styles from './styles';

const CardHand = ({
  curStage,
  beforeActionCards,
  afterActionCards,
  curCardSelected,
  changeCurCardSelected,
}) => {
  return (
    <View style={styles.container}>
      {
        curStage === 'before-roll-stage' &&
          <FlatList
            data={beforeActionCards}
            renderItem={({item, idx}) => {
              return (
                <TouchableOpacity onPress={() => changeCurCardSelected(idx)}>
                  <ActionCard name={item} isSelected={idx === curCardSelected}/>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item, idx) => idx}
            numColumns={beforeActionCards.length}
            scrollEnabled
            showsHorizontalScrollIndicator={false}
          />
      }
      {
        <FlatList
          data={afterActionCards}
          renderItem={({item, idx}) => {
            return (
              <TouchableOpacity onPress={() => ({})}>
                <ActionCard name={item} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, idx) => idx}
          numColumns={afterActionCards.length}
          scrollEnabled
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
  )
}

export default CardHand;

/*
          <View style={styles.container}>
            {
              beforeActionCards.length !== 0 &&
              beforeActionCards.map((e, idx) => {
                return (
                  <ActionCard key={idx} name={e}/>
                )
              })
            }
          </View>
*/